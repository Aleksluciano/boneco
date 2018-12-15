/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  parent: 'content',\n  width: 800,\n  height: 600,\n  localStorageName: 'phaseres6webpack',\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: {\n        y: 300\n      },\n      debug: false\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Game */ \"./src/scenes/Game.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n // import BootScene from './scenes/Boot'\n// import SplashScene from './scenes/Splash'\n\n\n\nvar gameConfig = Object.assign(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  scene: [_scenes_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n});\n\nvar Game =\n/*#__PURE__*/\nfunction (_Phaser$Game) {\n  _inherits(Game, _Phaser$Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, gameConfig));\n  }\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game);\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scenes/Game.js":
/*!****************************!*\
  !*** ./src/scenes/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var phaser3_swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser3-swipe */ \"./node_modules/phaser3-swipe/src/main.js\");\n/* harmony import */ var phaser3_swipe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser3_swipe__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* globals __DEV__ */\n\n\n // import Mushroom from '../sprites/Mushroom'\n\nvar tela;\nvar tudo = undefined;\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'GameScene'\n    }));\n  }\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {}\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      this.load.image('sky', 'assets/sky.png');\n      this.load.image('ground', 'assets/platform.png');\n      this.load.image('star', 'assets/star.png');\n      this.load.image('bomb', 'assets/bomb.png');\n      this.load.spritesheet('dude', 'assets/dude.png', {\n        frameWidth: 32,\n        frameHeight: 48\n      });\n      this.load.spritesheet('other', 'assets/dude.png', {\n        frameWidth: 32,\n        frameHeight: 48\n      });\n      this.load.plugin(\"Phaser3Swipe\", phaser3_swipe__WEBPACK_IMPORTED_MODULE_2___default.a, true);\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      tela = this;\n      var swipe = this.plugins.get('Phaser3Swipe');\n      swipe.cargar(tela);\n      tela = this;\n      tela.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()();\n      tela.parado = false;\n      tela.estavaCorendo = false;\n      tela.cursors = this.input.keyboard.createCursorKeys();\n      tela.otherPlayers = this.physics.add.group();\n      tela.platforms = this.physics.add.staticGroup();\n      tela.platforms.create(400, 568, 'ground').setScale(2).refreshBody();\n      tela.platforms.create(600, 400, 'ground');\n      tela.platforms.create(50, 250, 'ground');\n      tela.platforms.create(750, 220, 'ground');\n      tela.socket.on('currentPlayers', function (players) {\n        console.log('players', players);\n        Object.keys(players).forEach(function (id) {\n          console.log('id', id);\n\n          if (players[id].playerId == tela.socket.id) {\n            console.log('currentPlayers', players[id], id);\n            addPlayer(tela, players[id]);\n          } else {\n            addOtherPlayers(tela, players[id]);\n          }\n        });\n      });\n      tela.socket.on('newPlayer', function (playerInfo) {\n        console.log('newPlayer', playerInfo);\n        addOtherPlayers(tela, playerInfo);\n      });\n      tela.socket.on('disconnect', function (playerId) {\n        tela.otherPlayers.getChildren().forEach(function (otherPlayer) {\n          if (playerId == otherPlayer.playerId) {\n            otherPlayer.destroy();\n          }\n        });\n      });\n      tela.socket.on('playerMoved', function (playerInfo) {\n        tela.otherPlayers.getChildren().forEach(function (otherPlayer) {\n          if (playerInfo.playerId == otherPlayer.playerId) {\n            console.log(\"frame\", playerInfo.frame);\n            if (playerInfo.frame == 0) otherPlayer.anims.play(\"turn\");else if (otherPlayer.x > playerInfo.x) otherPlayer.anims.play(\"left\", true);else if (otherPlayer.x < playerInfo.x) otherPlayer.anims.play(\"right\", true);\n            otherPlayer.setPosition(playerInfo.x, playerInfo.y);\n            otherPlayer.oldPosition.x = playerInfo.x;\n            otherPlayer.oldPosition.y = playerInfo.y;\n          }\n        });\n      });\n      this.events.on(\"swipe\", function (e) {\n        if (e.right) {\n          console.log(\"Hacer algo a la derecha\");\n        } else if (e.left) {\n          console.log(\"Hacer algo a la izquierda\");\n        } else if (e.up) {\n          console.log(\"Hacer algo a la arriba\");\n        } else if (e.down) {\n          console.log(\"Hacer algo a la abajo\");\n        }\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (tela.player) {\n        // save old position data\n        if (tela.cursors.left.isDown) {\n          console.log(tela.otherPlayers);\n          tela.player.setVelocityX(-160);\n          tela.player.anims.play('left', true);\n          tela.estavaCorendo = true;\n          tela.parado = false;\n        } else if (tela.cursors.right.isDown) {\n          tela.player.setVelocityX(160);\n          tela.player.anims.play('right', true);\n          tela.estavaCorendo = true;\n          tela.parado = false;\n        } else {\n          tela.player.setVelocityX(0);\n          tela.player.anims.play('turn');\n          tela.parado = true;\n        }\n\n        if (tela.cursors.up.isDown) {\n          tela.player.setVelocityY(-330);\n        }\n\n        if (tela.player.oldPosition && (tela.player.x !== tela.player.oldPosition.x || tela.player.y !== tela.player.oldPosition.y)) {\n          tela.socket.emit('playerMovement', {\n            x: tela.player.x,\n            y: tela.player.y,\n            oldPosition: tela.player.oldPosition,\n            frame: 4\n          });\n        }\n\n        if (tela.parado && tela.estavaCorendo) {\n          tela.estavaCorendo = false;\n          tela.socket.emit('playerMovement', {\n            x: tela.player.x,\n            y: tela.player.y,\n            oldPosition: tela.player.oldPosition,\n            frame: 0\n          });\n        }\n\n        tela.player.oldPosition = {\n          x: tela.player.x,\n          y: tela.player.y\n        };\n      }\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\nfunction addPlayer(self, player) {\n  self.player = self.physics.add.sprite(player.x, player.y, 'dude');\n  self.player.playerId = player.playerId;\n  self.player.oldPosition = player.oldPosition;\n  self.player.x = player.x;\n  self.player.y = player.y;\n  self.player.frame = 4;\n  self.player.setBounce(0.2);\n  self.player.setCollideWorldBounds(true);\n  self.player.body.setGravityY(300);\n  self.physics.add.collider(self.player, self.platforms);\n  self.anims.create({\n    key: 'left',\n    frames: self.anims.generateFrameNumbers('dude', {\n      start: 0,\n      end: 3\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n  self.anims.create({\n    key: 'turn',\n    frames: [{\n      key: 'dude',\n      frame: 4\n    }],\n    frameRate: 20\n  });\n  self.anims.create({\n    key: 'right',\n    frames: self.anims.generateFrameNumbers('dude', {\n      start: 5,\n      end: 8\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n}\n\nfunction addOtherPlayers(self, oneMoreplayer) {\n  var otherPlayer = self.physics.add.sprite(oneMoreplayer.x, oneMoreplayer.y, 'dude');\n  otherPlayer.playerId = oneMoreplayer.playerId;\n  otherPlayer.oldPosition = oneMoreplayer.oldPosition;\n  otherPlayer.x = oneMoreplayer.x;\n  otherPlayer.y = oneMoreplayer.y;\n  otherPlayer.frame = 4;\n  otherPlayer.body.setGravityY(300);\n  self.physics.add.collider(otherPlayer, self.platforms); //   otherPlayer.anims.play({\n  //     frames: [ { key: 'dude', frame: 4 } ]\n  // });\n\n  self.otherPlayers.add(otherPlayer);\n  console.log(self.otherPlayers);\n  otherPlayer.setBounce(0.2); //otherPlayer.setPosition(300, 0);\n\n  otherPlayer.setCollideWorldBounds(true); // setTimeout(() =>{\n  //   self.otherPlayers.getChildren().forEach(function (otherPlayer) {\n  //     //if (playerInfo.playerId === otherPlayer.playerId) {\n  //       otherPlayer.setPosition(400, 450);\n  //       otherPlayer.setCollideWorldBounds(true);\n  //     })\n  //   },5000)\n  //   //});\n}\n\n//# sourceURL=webpack:///./src/scenes/Game.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\alexa\\Desktop\\game\\src\\main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///ws_(ignored)?");

/***/ })

/******/ });