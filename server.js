const express = require('express')
const app = express()
const path = require('path')
const server = require('http').Server(app)
const io = require('socket.io').listen(server)
let players = {}
// eslint-disable-next-line no-path-concat
app.use('/', express.static(path.join(__dirname, './')))

app.get((req, res) => {
  // eslint-disable-next-line no-path-concat
  res.sendFile(path.join(__dirname, './index.html'))
})

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};



const port = normalizePort(process.env.PORT || "3000");

server.listen(port, function () {
  console.log(`Listening on ${server.address().port}`)
  // alex
})

io.on('connection', function (socket) {
  console.log('a user connected', socket.id)
  // create a new player and add it to our players object
  players[socket.id] = {
    playerId: socket.id,
    x: 100,
    y: 450,
    frame: 4,
    oldPosition: {
      x: 100,
      y: 450,
    }
  }

  // send the players object to the new player
  socket.emit('currentPlayers', players)
  // update all other players of the new player
  socket.broadcast.emit('newPlayer', players[socket.id])

  socket.on('disconnect', function () {
    console.log('user disconnected')
    // remove this player from our players object
    delete players[socket.id]
    // emit a message to all players to remove this player
    io.emit('disconnect', socket.id)
  })

  // when a player moves, update the player data
socket.on('playerMovement', function (movementData) {
  players[socket.id].x = movementData.x;
  players[socket.id].y = movementData.y;
  players[socket.id].oldPosition = movementData.oldPosition;
  players[socket.id].frame = movementData.frame;
  
  // emit a message to all players about the player that moved
  socket.broadcast.emit('playerMoved', players[socket.id]);
});


})
