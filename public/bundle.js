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
/******/ 		"main": 0
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push(["./src/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cards.ts":
/*!**********************!*\
  !*** ./src/Cards.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var TweenMax = gsap.TweenMax;
var Cards = /** @class */ (function () {
    function Cards(_mainUpdate, app) {
        this.mainUpdate = _mainUpdate;
        this.container = new PIXI.Container();
        app.stage.addChild(this.container);
        this.playerContainer = new PIXI.Container();
        //this.playerContainer.visible = false;
        this.bankerContainer = new PIXI.Container();
        //this.bankerContainer.visible = false;
        this.cardSheet = PIXI.loader.resources["assets/CardAssets.json"];
        this.cardPool = [];
        //max cards for display is 6
        var newCard;
        for (var i = 0; i < 6; i++) {
            newCard = {
                face: 'A1',
                value: 1,
                icon: new PIXI.Sprite(this.cardSheet.textures['C1_Full.png']),
                backCard: new PIXI.Sprite(this.cardSheet.textures['BACK_Full.png']),
            };
            this.cardPool.push(newCard);
        }
        this.playerCount_txt = new PIXI.Text('0', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: ['#0000FF'],
            stroke: '#FFFFFF',
            strokeThickness: 4,
        }));
        this.playerCount_txt.position.set(204, 56);
        this.playerCount_txt.anchor.set(0.5);
        this.playerCount_txt.visible = false;
        this.container.addChild(this.playerCount_txt);
        this.bankerCount_txt = new PIXI.Text('0', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: ['#FF0000'],
            stroke: '#FFFFFF',
            strokeThickness: 4,
        }));
        this.bankerCount_txt.position.set(700, 56);
        this.bankerCount_txt.anchor.set(0.5);
        this.bankerCount_txt.visible = false;
        this.container.addChild(this.bankerCount_txt);
        this.container.addChild(this.playerContainer);
        this.container.addChild(this.bankerContainer);
    }
    Cards.prototype.update = function (_params) {
        var _this = this;
        switch (_params.type) {
            case 'DEAL_RESULT':
                this.resultData = _params;
                this.cardsOnTable = 0;
                this.targetDealCount = 4;
                this.totalPlayerCount = 0;
                this.totalBankerCount = 0;
                this.playerContainer.visible = true;
                this.bankerContainer.visible = true;
                this.allCardsToDeal = [];
                for (var i = 0; i < 3; i++) {
                    if (this.resultData.PlayerCard[i]) {
                        var newCard = this.cardPool[i];
                        newCard.face = this.resultData.PlayerCard[i].face;
                        newCard.value = this.resultData.PlayerCard[i].value;
                        newCard.icon.texture = this.cardSheet.textures[newCard.face + '_Full.png'];
                        newCard.icon.pivot.set(49, 60);
                        newCard.backCard.pivot.set(49, 60);
                        newCard.backCard.rotation = -20.05;
                        newCard.backCard.position.set(870, 5);
                        newCard.type = 'P';
                        switch (i) {
                            case 0:
                                newCard.targetPosition = { x: 190, y: 180 };
                                break;
                            case 1:
                                newCard.targetPosition = { x: 210, y: 180 };
                                break;
                            case 2:
                                newCard.targetPosition = { x: 230, y: 180 };
                                break;
                        }
                        this.playerContainer.addChild(newCard.backCard);
                        this.allCardsToDeal.push(newCard);
                    }
                    if (this.resultData.BankerCard[i]) {
                        var newCard = this.cardPool[3 + i];
                        newCard.face = this.resultData.BankerCard[i].face;
                        newCard.value = this.resultData.BankerCard[i].value;
                        newCard.icon.texture = this.cardSheet.textures[newCard.face + '_Full.png'];
                        newCard.icon.pivot.set(49, 60);
                        newCard.backCard.pivot.set(49, 60);
                        newCard.backCard.rotation = -20.05;
                        newCard.backCard.position.set(870, 5);
                        newCard.type = 'B';
                        switch (i) {
                            case 0:
                                newCard.targetPosition = { x: 690, y: 180 };
                                break;
                            case 1:
                                newCard.targetPosition = { x: 710, y: 180 };
                                break;
                            case 2:
                                newCard.targetPosition = { x: 730, y: 180 };
                                break;
                        }
                        this.allCardsToDeal.push(newCard);
                    }
                }
                this.update({ type: 'DEAL_CARD' });
                break;
            case 'DEAL_CARD':
                if (this.allCardsToDeal.length > 0) {
                    this.cardsOnTable++;
                    this.targetCard = this.allCardsToDeal.shift();
                    this.targetCard.backCard.scale.set(1);
                    var animTime = void 0;
                    switch (this.targetCard.type) {
                        case 'P':
                            this.totalPlayerCount += this.targetCard.value;
                            if (this.totalPlayerCount >= 10) {
                                this.totalPlayerCount -= 10;
                            }
                            this.playerContainer.addChild(this.targetCard.backCard);
                            animTime = 0.4;
                            break;
                        case 'B':
                            this.totalBankerCount += this.targetCard.value;
                            if (this.totalBankerCount >= 10) {
                                this.totalBankerCount -= 10;
                            }
                            this.bankerContainer.addChild(this.targetCard.backCard);
                            animTime = 0.2;
                            break;
                    }
                    TweenMax.to(this.targetCard.backCard, animTime, { rotation: Math.PI * 2, ease: gsap.Linear.easeNone });
                    TweenMax.to(this.targetCard.backCard, animTime, { x: this.targetCard.targetPosition.x, y: this.targetCard.targetPosition.y, ease: gsap.Linear.easeNone, onComplete: this.cardAnimComplete, onCompleteScope: this });
                }
                break;
            case 'CHECK_DRAW_CARD':
                //wait time before draw
                setTimeout(function () {
                    if (_this.allCardsToDeal.length > 0) {
                        _this.targetDealCount++;
                        _this.update({ type: 'DEAL_CARD' });
                    }
                    else {
                        _this.update({ type: 'SHOW_RESULT', data: _this.resultData });
                    }
                }, 2000);
                break;
            case 'SHOW_RESULT':
                this.mainUpdate(_params);
                break;
            case 'RESET':
            case 'REBET':
                for (var i = 0; i < this.cardPool.length; i++) {
                    this.targetCard = this.cardPool[i];
                    TweenMax.to(this.targetCard.icon, 0.3, { rotation: Math.PI * 2, ease: gsap.Linear.easeNone });
                    TweenMax.to(this.targetCard.icon, 0.3, { x: -100, y: -100, ease: gsap.Linear.easeNone, onCompleteScope: this });
                }
                break;
        }
    };
    Cards.prototype.cardAnimComplete = function () {
        this.targetCard.icon.position = this.targetCard.backCard.position;
        this.targetCard.icon.scale.set(0, 1);
        TweenMax.to(this.targetCard.backCard.scale, 0.2, { x: 0, ease: gsap.Linear.easeNone, onComplete: function () {
                TweenMax.to(this.targetCard.icon.scale, 0.2, { x: 1, ease: gsap.Linear.easeNone, onCompleteScope: this, onComplete: function () {
                        switch (this.targetCard.type) {
                            case 'P':
                                this.playerCount_txt.visible = true;
                                this.playerCount_txt.text = this.totalPlayerCount;
                                break;
                            case 'B':
                                this.bankerCount_txt.visible = true;
                                this.bankerCount_txt.text = this.totalBankerCount;
                                break;
                        }
                        if (this.cardsOnTable < this.targetDealCount) {
                            this.update({ type: 'DEAL_CARD' });
                        }
                        else {
                            this.update({ type: 'CHECK_DRAW_CARD' });
                        }
                    } });
            }, onCompleteScope: this
        });
        switch (this.targetCard.type) {
            case 'P':
                //this.playerContainer.removeChild(this.targetCard.backCard);
                this.playerContainer.addChild(this.targetCard.icon);
                break;
            case 'B':
                //this.bankerContainer.removeChild(this.targetCard.backCard);
                this.bankerContainer.addChild(this.targetCard.icon);
                break;
        }
    };
    return Cards;
}());
exports.Cards = Cards;


/***/ }),

/***/ "./src/Chips.ts":
/*!**********************!*\
  !*** ./src/Chips.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var Chips = /** @class */ (function () {
    function Chips(_mainUpdate, app) {
        this.allDenomination = [10, 20, 50, 100, 250];
        this.mainUpdate = _mainUpdate;
        this.container = new PIXI.Container();
        app.stage.addChild(this.container);
        var gameSheet = PIXI.loader.resources["assets/GameAssets.json"];
        this.allChips = {};
        var newChip = {};
        var newButton;
        var newIcon;
        var newTxt;
        var txtStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'],
            stroke: '#4a1850',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
        });
        for (var i = 0; i < this.allDenomination.length; i++) {
            newChip = {};
            newChip.value = this.allDenomination[i];
            newChip.name = 'Chip_' + this.allDenomination[i];
            newChip.container = new PIXI.Container();
            this.container.addChild(newChip.container);
            newChip.texture = gameSheet.textures["chips" + i + ".png"];
            newChip.texture_selected = gameSheet.textures["chips" + i + "_selected.png"];
            newIcon = new PIXI.Sprite(newChip.texture);
            newTxt = new PIXI.Text(this.allDenomination[i].toString(), txtStyle);
            switch (i) {
                case 0:
                    newIcon.position.set(81, 412);
                    newTxt.position.set(110, 440);
                    break;
                case 1:
                    newIcon.position.set(242, 453);
                    newTxt.position.set(274, 480);
                    break;
                case 2:
                    newIcon.position.set(402, 465);
                    newTxt.position.set(434, 494);
                    break;
                case 3:
                    newIcon.position.set(563, 453);
                    newTxt.position.set(586, 482);
                    break;
                case 4:
                    newIcon.position.set(721, 409);
                    newTxt.position.set(746, 438);
                    break;
            }
            newIcon.interactive = true;
            newIcon.buttonMode = true;
            newIcon.name = 'Chip_' + this.allDenomination[i];
            this.allChips['Chip_' + this.allDenomination[i]] = newChip;
            newIcon.on('pointerdown', function (e) {
                var targetData;
                for (var property in this.allChips) {
                    targetData = this.allChips[property];
                    targetData.icon.texture = targetData.texture;
                }
                targetData = this.allChips[e.target.name];
                targetData.icon.texture = targetData.texture_selected;
                this.selectedChipValue = targetData.value;
                this.mainUpdate({ type: 'CHIP_SELECTED', value: this.selectedChipValue });
            }, this);
            newChip.icon = newIcon;
            newChip.container.addChild(newIcon, newTxt);
        }
        //default chips
        this.selectedChipValue = this.allChips['Chip_' + this.allDenomination[0].toString()].value;
        this.allChips['Chip_' + this.allDenomination[0].toString()].icon.texture = this.allChips['Chip_' + this.allDenomination[0].toString()].texture_selected;
        this.mainUpdate({ type: 'CHIP_SELECTED', value: this.selectedChipValue });
    }
    return Chips;
}());
exports.Chips = Chips;


/***/ }),

/***/ "./src/Controls.ts":
/*!*************************!*\
  !*** ./src/Controls.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var Controls = /** @class */ (function () {
    function Controls(_mainUpdate, _app) {
        this.mainUpdate = _mainUpdate;
        this.app = _app;
        this.isSummary = false;
        this.container = new PIXI.Container();
        this.app.stage.addChild(this.container);
        var gameSheet = PIXI.loader.resources["assets/GameAssets.json"];
        //deal
        this.deal_btn = {
            texture: gameSheet.textures["btn_controls_send_mouseout.png"],
            texture_mouseover: gameSheet.textures["btn_controls_send_mouseover.png"],
            icon: new PIXI.Sprite(),
        };
        this.deal_btn.icon.texture = this.deal_btn.texture;
        this.deal_btn.icon.interactive = true;
        this.deal_btn.icon.buttonMode = true;
        this.deal_btn.icon.position.set(798, 124);
        this.deal_btn.icon.on('pointerdown', function (e) {
            this.update({ type: 'HIDE_CONTROLS' });
            this.mainUpdate({ type: 'DEAL', });
        }, this);
        this.deal_btn.icon.on('pointerover', function (e) {
            this.deal_btn.icon.texture = this.deal_btn.texture_mouseover;
        }, this);
        this.deal_btn.icon.on('pointerout', function (e) {
            this.deal_btn.icon.texture = this.deal_btn.texture;
        }, this);
        //this.container.addChild(this.deal_btn.icon);
        //erase
        this.erase_btn = {
            texture: gameSheet.textures["btn_controls_erase_mouseout.png"],
            texture_mouseover: gameSheet.textures["btn_controls_erase_mouseover.png"],
            icon: new PIXI.Sprite(),
        };
        this.erase_btn.icon.texture = this.erase_btn.texture;
        this.erase_btn.icon.interactive = true;
        this.erase_btn.icon.buttonMode = true;
        this.erase_btn.icon.position.set(798, 252);
        this.erase_btn.icon.on('pointerdown', function (e) {
            this.update({ type: 'HIDE_CONTROLS' });
            if (this.isSummary) {
                this.isSummary = false;
                this.mainUpdate({ type: 'RESET' });
            }
            else {
                this.mainUpdate({ type: 'ERASE' });
            }
        }, this);
        this.erase_btn.icon.on('pointerover', function (e) {
            this.erase_btn.icon.texture = this.erase_btn.texture_mouseover;
        }, this);
        this.erase_btn.icon.on('pointerout', function (e) {
            this.erase_btn.icon.texture = this.erase_btn.texture;
        }, this);
        //this.container.addChild(this.erase_btn.icon);
        //rebet
        this.rebet_btn = {
            texture: gameSheet.textures["btn_controls_rebet_mouseout.png"],
            texture_mouseover: gameSheet.textures["btn_controls_rebet_mouseover.png"],
            icon: new PIXI.Sprite(),
        };
        this.rebet_btn.icon.texture = this.rebet_btn.texture;
        this.rebet_btn.icon.interactive = true;
        this.rebet_btn.icon.buttonMode = true;
        this.rebet_btn.icon.position.set(798, 124);
        this.rebet_btn.icon.on('pointerdown', function (e) {
            this.update({ type: 'HIDE_CONTROLS' });
            this.mainUpdate({ type: 'REBET', });
        }, this);
        this.rebet_btn.icon.on('pointerover', function (e) {
            this.rebet_btn.icon.texture = this.rebet_btn.texture_mouseover;
        }, this);
        this.rebet_btn.icon.on('pointerout', function (e) {
            this.rebet_btn.icon.texture = this.rebet_btn.texture;
        }, this);
        //this.update({type:'HIDE_CONTROLS'});
        //this.update({type:'SHOW_SUMMARY'});
    }
    Controls.prototype.update = function (_params) {
        //console.log('CONTROLS UPDATE',_params);
        switch (_params.type) {
            case 'HIDE_CONTROLS':
                this.app.stage.removeChild(this.container);
                this.container.removeChild(this.rebet_btn.icon);
                this.container.removeChild(this.erase_btn.icon);
                this.container.removeChild(this.deal_btn.icon);
                break;
            case 'SHOW_CONTROLS_BET':
                this.app.stage.addChild(this.container);
                this.container.addChild(this.erase_btn.icon);
                this.container.addChild(this.deal_btn.icon);
                break;
            case 'SHOW_SUMMARY':
                this.app.stage.addChild(this.container);
                if (_params.data.allowRebet) {
                    this.container.addChild(this.rebet_btn.icon);
                }
                this.container.addChild(this.erase_btn.icon);
                this.isSummary = true;
                break;
        }
    };
    return Controls;
}());
exports.Controls = Controls;


/***/ }),

/***/ "./src/Dealer.ts":
/*!***********************!*\
  !*** ./src/Dealer.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dealer = /** @class */ (function () {
    function Dealer(_mainUpdate) {
        this.mainUpdate = _mainUpdate;
        this.deckCount = 8;
        this.allCards = [];
        this.balance = 1200;
        var newCard;
        for (var i = 1; i <= 13; i++) {
            for (var a = 0; a < this.deckCount; a++) {
                if (i < 10) {
                    //Club
                    newCard = { face: 'C' + i, value: i };
                    this.allCards.push(newCard);
                    //Spade
                    newCard = { face: 'S' + i, value: i };
                    this.allCards.push(newCard);
                    //Heart
                    newCard = { face: 'H' + i, value: i };
                    this.allCards.push(newCard);
                    //Diamond
                    newCard = { face: 'D' + i, value: i };
                    this.allCards.push(newCard);
                }
                else if (i == 10) {
                    //Club
                    newCard = { face: 'C0', value: 0 };
                    this.allCards.push(newCard);
                    //Spade
                    newCard = { face: 'S0', value: 0 };
                    this.allCards.push(newCard);
                    //Heart
                    newCard = { face: 'H0', value: 0 };
                    this.allCards.push(newCard);
                    //Diamond
                    newCard = { face: 'D0', value: 0 };
                    this.allCards.push(newCard);
                }
                else if (i == 11) {
                    //Club
                    newCard = { face: 'CJ', value: 0 };
                    this.allCards.push(newCard);
                    //Spade
                    newCard = { face: 'SJ', value: 0 };
                    this.allCards.push(newCard);
                    //Heart
                    newCard = { face: 'HJ', value: 0 };
                    this.allCards.push(newCard);
                    //Diamond
                    newCard = { face: 'DJ', value: 0 };
                    this.allCards.push(newCard);
                }
                else if (i == 12) {
                    //Club
                    newCard = { face: 'CQ', value: 0 };
                    this.allCards.push(newCard);
                    //Spade
                    newCard = { face: 'SQ', value: 0 };
                    this.allCards.push(newCard);
                    //Heart
                    newCard = { face: 'HQ', value: 0 };
                    this.allCards.push(newCard);
                    //Diamond
                    newCard = { face: 'DQ', value: 0 };
                    this.allCards.push(newCard);
                }
                else if (i == 13) {
                    //Club
                    newCard = { face: 'CK', value: 0 };
                    this.allCards.push(newCard);
                    //Spade
                    newCard = { face: 'SK', value: 0 };
                    this.allCards.push(newCard);
                    //Heart
                    newCard = { face: 'HK', value: 0 };
                    this.allCards.push(newCard);
                    //Diamond
                    newCard = { face: 'DK', value: 0 };
                    this.allCards.push(newCard);
                }
            }
        }
        this.update({ type: 'SHUFFLE_CARD' });
    }
    Dealer.prototype.update = function (_params) {
        var _a;
        switch (_params.type) {
            case 'HIDE_CONTROLS':
                break;
            case 'DEAL':
                if (this.shuffledCard.length < 6) {
                    this.update({ type: 'SHUFFLE_CARD' });
                }
                this.recievedBets = _params.betData;
                this.balance -= (this.recievedBets.player + this.recievedBets.banker + this.recievedBets.tie);
                this.playerCard = [];
                this.bankerCard = [];
                this.playerCount = 0;
                this.bankerCount = 0;
                //first card
                this.removedCard = this.shuffledCard.shift();
                this.playerCard.push(this.removedCard);
                this.playerCount = this.removedCard.value;
                this.removedCard = this.shuffledCard.shift();
                this.bankerCard.push(this.removedCard);
                this.bankerCount = this.removedCard.value;
                //2nd card
                this.removedCard = this.shuffledCard.shift();
                this.playerCard.push(this.removedCard);
                this.playerCount += this.removedCard.value;
                if (this.playerCount >= 10) {
                    this.playerCount -= 10;
                }
                this.removedCard = this.shuffledCard.shift();
                this.bankerCard.push(this.removedCard);
                this.bankerCount += this.removedCard.value;
                if (this.bankerCount >= 10) {
                    this.bankerCount -= 10;
                }
                //check for 3rd card
                this.player3rdCard = null;
                //natural cards
                //If the Player (or Banker) is dealt a score of 8 or 9 in their first two cards, known as a ‘natural’ hand, they win (or tie if the opposing hand is worth the same number of points), and a new deal begins. A natural 9 will beat a natural 8.
                if (this.playerCount >= 8 || this.bankerCount >= 8) {
                    //no draw natural cards
                }
                else {
                    //If the Player’s first two cards equal 0-5, the Player must draw a third card.
                    if (this.playerCount <= 5) {
                        this.removedCard = this.shuffledCard.shift();
                        this.playerCard.push(this.removedCard);
                        this.playerCount += this.removedCard.value;
                        if (this.playerCount >= 10) {
                            this.playerCount -= 10;
                        }
                        this.player3rdCard = this.removedCard;
                        //console.log('Player <= 5 Draw card',this.playerCard);
                        if (this.bankerCount <= 2) {
                            //Automatically draws
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if (this.bankerCount >= 10) {
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer <= 2 Draw card',this.bankerCard);
                        }
                        else if (this.bankerCount == 3 && this.player3rdCard.value < 8) {
                            //If Player draws any third card (unless it is an 8)
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if (this.bankerCount >= 10) {
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 3 Draw card if not 8: ',this.player3rdCard.value,this.bankerCard);
                        }
                        else if (this.bankerCount == 4 && this.player3rdCard.value >= 2 && this.player3rdCard.value <= 7) {
                            //If Player draws a third card between 2-7
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if (this.bankerCount >= 10) {
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 4 Draw card if not 2-7: ',this.player3rdCard.value,this.bankerCard);
                        }
                        else if (this.bankerCount == 5 && this.player3rdCard.value >= 4 && this.player3rdCard.value <= 7) {
                            //If Player draws a third card between 4-7
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if (this.bankerCount >= 10) {
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 5 Draw card if not 4-7: ',this.player3rdCard.value,this.bankerCard);
                        }
                        else if (this.bankerCount == 6 && this.player3rdCard.value >= 6 && this.player3rdCard.value <= 7) {
                            //If Player draws a third card between 6-7
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if (this.bankerCount >= 10) {
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 6 Draw card if not 6-7: ',this.player3rdCard.value,this.bankerCard);
                        }
                        else if (this.bankerCount >= 7) {
                            //Does not draw
                        }
                    }
                    //If the Player’s first two cards equal 6 or 7, they cannot draw a third card and the Banker will draw on a score of 0-5
                    if (this.playerCount >= 6 && this.playerCount <= 7 && this.player3rdCard == null) {
                        //console.log('Player == 6-7, banker Draw card if  0-5: ',this.bankerCount);
                        if (this.bankerCount <= 5) {
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if (this.bankerCount >= 10) {
                                this.bankerCount -= 10;
                            }
                        }
                    }
                }
                if (this.playerCount >= 10) {
                    this.playerCount -= 10;
                }
                if (this.bankerCount >= 10) {
                    this.bankerCount -= 10;
                }
                this.payouts = { player: 0, banker: 0, tie: 0 };
                if (this.playerCount > this.bankerCount) {
                    this.winResult = 'P';
                    if (this.recievedBets.player > 0) {
                        this.payouts.player = this.recievedBets.player * 1;
                        this.balance += this.payouts.player * 2;
                    }
                }
                else if (this.bankerCount > this.playerCount) {
                    this.winResult = 'B';
                    if (this.recievedBets.banker > 0) {
                        this.payouts.banker = this.recievedBets.banker * 1;
                        this.balance += this.payouts.banker * 2;
                    }
                }
                else {
                    this.winResult = 'T';
                    if (this.recievedBets.tie > 0) {
                        this.payouts.tie = this.recievedBets.tie * 8;
                        this.balance += this.payouts.tie + this.recievedBets.tie;
                    }
                }
                this.mainUpdate({
                    type: 'DEAL_RESULT',
                    PlayerCard: this.playerCard,
                    PlayerCount: this.playerCount,
                    BankerCard: this.bankerCard,
                    BankerCount: this.bankerCount,
                    WinResult: this.winResult,
                    payout: this.payouts,
                    balance: this.balance,
                });
                break;
            case 'SHUFFLE_CARD':
                this.shuffledCard = JSON.parse(JSON.stringify(this.allCards));
                for (var i = this.shuffledCard.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    _a = [this.shuffledCard[j], this.shuffledCard[i]], this.shuffledCard[i] = _a[0], this.shuffledCard[j] = _a[1];
                }
                //cut card, get a random number between and throw it away, 30-70;
                var cutRandom = Math.round(Math.random() * (70 - 30) + 30);
                this.shuffledCard.splice(this.shuffledCard.length - cutRandom, cutRandom);
                break;
            case 'GET_BALANCE':
                return this.balance;
                break;
        }
    };
    return Dealer;
}());
exports.Dealer = Dealer;


/***/ }),

/***/ "./src/Summary.ts":
/*!************************!*\
  !*** ./src/Summary.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var Summary = /** @class */ (function () {
    function Summary(_mainUpdate, _app) {
        this.mainUpdate = _mainUpdate;
        this.app = _app;
        this.container = new PIXI.Container();
        //this.app.stage.addChild(this.container);
        this.winnerContainer = new PIXI.Container();
        this.container.addChild(this.winnerContainer);
        this.winnerBG = new PIXI.Graphics();
        this.winnerBG.lineStyle(2, 0x999999, 1);
        this.winnerBG.beginFill(0xCCCCCC);
        this.winnerBG.drawRect(0, 0, 400, 60);
        this.winnerBG.endFill();
        this.winnerBG.position.set((900 - 400) / 2, 180);
        this.winnerContainer.addChild(this.winnerBG);
        this.winnerLabel_txt = new PIXI.Text('PLAYER WINS', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: ['#000000'],
            stroke: '#FFFF00',
            strokeThickness: 4,
        }));
        this.winnerLabel_txt.position.set(900 / 2, 210);
        this.winnerLabel_txt.anchor.set(0.5);
        this.winnerContainer.addChild(this.winnerLabel_txt);
        this.youWonContainer = new PIXI.Container();
        //this.container.addChild(this.youWonContainer);
        this.youWonBG = new PIXI.Graphics();
        this.youWonBG.lineStyle(2, 0x999999, 1);
        this.youWonBG.beginFill(0xCCCCCC);
        this.youWonBG.drawRect(0, 0, 400, 80);
        this.youWonBG.endFill();
        this.youWonBG.position.set((900 - 400) / 2, 256);
        this.youWonContainer.addChild(this.youWonBG);
        this.youWonLabel_txt = new PIXI.Text('YOU HAVE WON', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontWeight: 'bold',
            fill: ['#000000'],
            stroke: '#FFFF00',
            strokeThickness: 4,
        }));
        this.youWonLabel_txt.position.set(900 / 2, 280);
        this.youWonLabel_txt.anchor.set(0.5);
        this.youWonContainer.addChild(this.youWonLabel_txt);
        this.youWonValue_txt = new PIXI.Text('999.00', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 34,
            fontWeight: 'bold',
            fill: ['#000000'],
            stroke: '#FFFF00',
            strokeThickness: 4,
        }));
        this.youWonValue_txt.position.set(900 / 2, 310);
        this.youWonValue_txt.anchor.set(0.5);
        this.youWonContainer.addChild(this.youWonValue_txt);
    }
    Summary.prototype.update = function (_params) {
        switch (_params.type) {
            case 'SHOW_SUMMARY':
                this.app.stage.addChild(this.container);
                switch (_params.data.WinResult) {
                    case 'P':
                        this.winnerLabel_txt.text = 'PLAYER WINS';
                        break;
                    case 'B':
                        this.winnerLabel_txt.text = 'BANKER WINS';
                        break;
                    case 'T':
                        this.winnerLabel_txt.text = 'TIE WINS';
                        break;
                }
                this.totalWin = _params.data.payout.player + _params.data.payout.banker + _params.data.payout.tie;
                if (this.totalWin > 0) {
                    this.youWonValue_txt.text = this.totalWin.toFixed(2);
                    this.container.addChild(this.youWonContainer);
                }
                break;
            case 'RESET':
            case 'REBET':
                this.app.stage.removeChild(this.container);
                this.container.removeChild(this.youWonContainer);
                break;
        }
    };
    return Summary;
}());
exports.Summary = Summary;


/***/ }),

/***/ "./src/Table.ts":
/*!**********************!*\
  !*** ./src/Table.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var TweenMax = gsap.TweenMax;
var Table = /** @class */ (function () {
    function Table(_update, app) {
        this.mainUpdate = _update;
        this.betLimits = { player: 500, banker: 500, tie: 250 };
        this.betMinimum = 10;
        this.currentBets = { player: 0, banker: 0, tie: 0 };
        this.totalBet = 0;
        this.balance = this.mainUpdate({ type: 'GET_BALANCE' });
        var gameSheet = PIXI.loader.resources["assets/GameAssets.json"];
        this.container = new PIXI.Container();
        app.stage.addChild(this.container);
        this.tie_button = new PIXI.Graphics();
        this.tie_button.beginFill(0xff0000);
        this.tie_button.drawCircle(42, 42, 42);
        this.tie_button.endFill();
        this.tie_button.alpha = 0.01;
        this.tie_button.interactive = true;
        this.tie_button.buttonMode = true;
        this.tie_button.on('pointerdown', this.betOnTie, this);
        this.tie_button.position.set(412, 160);
        this.player_button = new PIXI.Graphics();
        this.player_button.beginFill(0xff0000);
        this.player_button.drawCircle(42, 42, 42);
        this.player_button.endFill();
        this.player_button.alpha = 0.01;
        this.player_button.interactive = true;
        this.player_button.buttonMode = true;
        this.player_button.on('pointerdown', this.betOnPlayer, this);
        this.player_button.position.set(320, 316);
        this.banker_button = new PIXI.Graphics();
        this.banker_button.beginFill(0xff0000);
        this.banker_button.drawCircle(42, 42, 42);
        this.banker_button.endFill();
        this.banker_button.alpha = 0.01;
        this.banker_button.interactive = true;
        this.banker_button.buttonMode = true;
        this.banker_button.on('pointerdown', this.betOnBanker, this);
        this.banker_button.position.set(506, 316);
        var tableBetStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'],
            stroke: '#4a1850',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
        });
        var txtStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 14,
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'],
            stroke: '#4a1850',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
        });
        this.tieValue_txt = new PIXI.Text('0', tableBetStyle);
        this.tieValue_txt.position.set(454, 204);
        this.tieValue_txt.anchor.set(0.5);
        this.playerValue_txt = new PIXI.Text('0', tableBetStyle);
        this.playerValue_txt.position.set(362, 358);
        this.playerValue_txt.anchor.set(0.5);
        this.bankerValue_txt = new PIXI.Text('0', tableBetStyle);
        this.bankerValue_txt.position.set(548, 358);
        this.bankerValue_txt.anchor.set(0.5);
        this.balanceLabel_txt = new PIXI.Text('BALANCE :', txtStyle);
        this.balanceLabel_txt.position.set(5, 550);
        this.balanceValue_txt = new PIXI.Text(this.balance.toFixed(2), txtStyle);
        this.balanceValue_txt.position.set(90, 550);
        this.totalBetLabel_txt = new PIXI.Text('TOTAL BET :', txtStyle);
        this.totalBetLabel_txt.position.set(736, 550);
        this.totalBetValue_txt = new PIXI.Text(this.totalBet.toFixed(2), txtStyle);
        this.totalBetValue_txt.position.set(830, 550);
        this.betLimitsLabel_txt = new PIXI.Text('Player / Banker : Min : ' + this.betMinimum + '  -  Max : ' + this.betLimits.player + '    Tie : Min : ' + this.betMinimum + '  -  Max : ' + this.betLimits.tie, txtStyle);
        this.betLimitsLabel_txt.position.set(5, 576);
        this.betLimitsLabel_txt.anchor.set(0);
        this.resultLabel_txt = new PIXI.Text('', txtStyle);
        this.resultLabel_txt.position.set(895, 576);
        this.resultLabel_txt.anchor.set(1, 0);
        this.playerWinHighlight = new PIXI.Sprite(gameSheet.textures["player_win_highlight.png"]);
        this.playerWinHighlight.position.set(286, 388);
        this.playerWinHighlight.alpha = 0.5;
        this.bankerWinHighlight = new PIXI.Sprite(gameSheet.textures["banker_win_highlight.png"]);
        this.bankerWinHighlight.position.set(472, 388);
        this.bankerWinHighlight.alpha = 0.5;
        this.tieWinHighlight = new PIXI.Sprite(gameSheet.textures["tie_win_highlight.png"]);
        this.tieWinHighlight.position.set(408, 234);
        this.tieWinHighlight.alpha = 0.5;
        this.container.addChild(this.tie_button, this.player_button, this.banker_button);
        //this.container.addChild(this.tieValue_txt,this.playerValue_txt,this.bankerValue_txt);
        this.container.addChild(this.balanceLabel_txt, this.balanceValue_txt, this.betLimitsLabel_txt);
        //this.container.addChild(this.playerWinHighlight,this.bankerWinHighlight,this.tieWinHighlight);
    }
    Table.prototype.betOnTie = function (e) {
        if (this.totalBet + this.chipValue > this.balance) {
            alert('NOT ENOUGH BALANCE');
            return;
        }
        if (this.currentBets.tie + this.chipValue < this.betLimits.tie) {
            this.currentBets.tie += this.chipValue;
        }
        else {
            this.currentBets.tie = this.betLimits.tie;
            this.tie_button.interactive = false;
        }
        this.container.addChild(this.tieValue_txt);
        this.tieValue_txt.text = this.currentBets.tie.toString();
        this.update({ type: 'UPDATE_VALUES' });
    };
    Table.prototype.betOnPlayer = function (e) {
        if (this.totalBet + this.chipValue > this.balance) {
            alert('NOT ENOUGH BALANCE');
            return;
        }
        if (this.currentBets.player + this.chipValue < this.betLimits.player) {
            this.currentBets.player += this.chipValue;
        }
        else {
            this.currentBets.player = this.betLimits.player;
            this.player_button.interactive = false;
        }
        this.container.addChild(this.playerValue_txt);
        this.playerValue_txt.text = this.currentBets.player.toString();
        this.update({ type: 'UPDATE_VALUES' });
    };
    Table.prototype.betOnBanker = function (e) {
        if (this.totalBet + this.chipValue > this.balance) {
            alert('NOT ENOUGH BALANCE');
            return;
        }
        if (this.currentBets.banker + this.chipValue < this.betLimits.banker) {
            this.currentBets.banker += this.chipValue;
        }
        else {
            this.currentBets.banker = this.betLimits.banker;
            this.banker_button.interactive = false;
        }
        this.container.addChild(this.bankerValue_txt);
        this.bankerValue_txt.text = this.currentBets.banker.toString();
        this.update({ type: 'UPDATE_VALUES' });
    };
    Table.prototype.update = function (_params) {
        var _this = this;
        switch (_params.type) {
            case 'CHIP_SELECTED':
                this.chipValue = _params.value;
                break;
            case 'UPDATE_VALUES':
                if (this.totalBet == 0) {
                    //show controls
                    this.mainUpdate({ type: 'SHOW_CONTROLS_BET', });
                    this.container.addChild(this.totalBetLabel_txt, this.totalBetValue_txt);
                }
                this.totalBet = this.currentBets.player + this.currentBets.banker + this.currentBets.tie;
                this.totalBetValue_txt.text = this.totalBet.toFixed(2);
                this.balanceAfterBet = this.balance - this.totalBet;
                this.balanceValue_txt.text = this.balanceAfterBet.toFixed(2);
                break;
            case 'CLEAR_ALL':
                this.container.removeChild(this.totalBetValue_txt);
                this.container.removeChild(this.totalBetLabel_txt);
                this.resultLabel_txt.text = '';
                this.totalBet = 0;
                this.currentBets.player = this.currentBets.banker = this.currentBets.tie = 0;
                this.totalBetValue_txt.text = this.totalBet.toFixed(2);
                this.balanceAfterBet = this.balance;
                this.balanceValue_txt.text = this.balance.toFixed(2);
                this.playerValue_txt.text = this.currentBets.player.toString();
                this.bankerValue_txt.text = this.currentBets.banker.toString();
                this.tieValue_txt.text = this.currentBets.tie.toString();
                this.container.removeChild(this.playerValue_txt);
                this.container.removeChild(this.bankerValue_txt);
                this.container.removeChild(this.tieValue_txt);
                this.player_button.interactive = true;
                this.banker_button.interactive = true;
                this.tie_button.interactive = true;
                break;
            case 'ERASE':
                this.update({ type: 'CLEAR_ALL' });
                break;
            case 'DEAL':
                this.player_button.interactive = false;
                this.banker_button.interactive = false;
                this.tie_button.interactive = false;
                break;
            case 'GET_BET_DATA':
                return this.currentBets;
                break;
            case 'SHOW_RESULT':
                this.balance = _params.data.balance;
                this.balanceValue_txt.text = this.balance.toFixed(2);
                this.previousBets = JSON.parse(JSON.stringify(this.currentBets));
                this.resultLabel_txt.text = '';
                switch (_params.data.WinResult) {
                    case 'P':
                        this.playerWinHighlight.alpha = 0;
                        this.container.addChild(this.playerWinHighlight);
                        this.tweenAnim = TweenMax.to(this.playerWinHighlight, 0.2, { alpha: 0.3, ease: gsap.Linear.easeNone, onCompleteScope: this }).repeat(-1);
                        if (_params.data.payout.player > 0) {
                            this.resultLabel_txt.text = 'TOTAL WINS: ' + _params.data.payout.player.toFixed(2);
                        }
                        this.container.removeChild(this.bankerValue_txt);
                        this.container.removeChild(this.tieValue_txt);
                        break;
                    case 'B':
                        this.bankerWinHighlight.alpha = 0;
                        this.container.addChild(this.bankerWinHighlight);
                        this.tweenAnim = TweenMax.to(this.bankerWinHighlight, 0.2, { alpha: 0.3, ease: gsap.Linear.easeNone, onCompleteScope: this }).repeat(-1);
                        if (_params.data.payout.banker > 0) {
                            this.resultLabel_txt.text = 'TOTAL WINS: ' + _params.data.payout.banker.toFixed(2);
                        }
                        this.container.removeChild(this.playerValue_txt);
                        this.container.removeChild(this.tieValue_txt);
                        break;
                    case 'T':
                        this.tieWinHighlight.alpha = 0;
                        this.container.addChild(this.tieWinHighlight);
                        this.tweenAnim = TweenMax.to(this.tieWinHighlight, 0.2, { alpha: 0.3, ease: gsap.Linear.easeNone, onCompleteScope: this }).repeat(-1);
                        if (_params.data.payout.tie > 0) {
                            this.resultLabel_txt.text = 'TOTAL WINS: ' + _params.data.payout.tie.toFixed(2);
                        }
                        this.container.removeChild(this.playerValue_txt);
                        this.container.removeChild(this.bankerValue_txt);
                        break;
                }
                if (this.resultLabel_txt.text != '') {
                    this.container.addChild(this.resultLabel_txt);
                }
                setTimeout(function () {
                    _params.data.allowRebet = (_this.previousBets.player + _this.previousBets.banker + _this.previousBets.tie) <= _this.balance ? true : false;
                    _this.mainUpdate({ type: 'SHOW_SUMMARY', data: _params.data });
                }, 3000);
                break;
            case 'RESET':
                this.update({ type: 'CLEAR_ALL' });
                this.tweenAnim.kill();
                this.container.removeChild(this.playerWinHighlight);
                this.container.removeChild(this.bankerWinHighlight);
                this.container.removeChild(this.tieWinHighlight);
                break;
            case 'REBET':
                this.update({ type: 'RESET' });
                this.currentBets.player = this.previousBets.player;
                if (this.currentBets.player > 0) {
                    if (this.currentBets.player >= this.betLimits.player) {
                        this.player_button.interactive = false;
                    }
                    this.container.addChild(this.playerValue_txt);
                    this.playerValue_txt.text = this.currentBets.player.toString();
                }
                this.currentBets.banker = this.previousBets.banker;
                if (this.currentBets.banker > 0) {
                    if (this.currentBets.banker >= this.betLimits.banker) {
                        this.banker_button.interactive = false;
                    }
                    this.container.addChild(this.bankerValue_txt);
                    this.bankerValue_txt.text = this.currentBets.banker.toString();
                }
                this.currentBets.tie = this.previousBets.tie;
                if (this.currentBets.tie > 0) {
                    if (this.currentBets.tie >= this.betLimits.tie) {
                        this.tie_button.interactive = false;
                    }
                    this.container.addChild(this.tieValue_txt);
                    this.tieValue_txt.text = this.currentBets.tie.toString();
                }
                this.update({ type: 'UPDATE_VALUES' });
                break;
        }
    };
    return Table;
}());
exports.Table = Table;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var TweenMax = gsap.TweenMax;
var Table_1 = __webpack_require__(/*! ./Table */ "./src/Table.ts");
var Chips_1 = __webpack_require__(/*! ./Chips */ "./src/Chips.ts");
var Controls_1 = __webpack_require__(/*! ./Controls */ "./src/Controls.ts");
var Dealer_1 = __webpack_require__(/*! ./Dealer */ "./src/Dealer.ts");
var Cards_1 = __webpack_require__(/*! ./Cards */ "./src/Cards.ts");
var Summary_1 = __webpack_require__(/*! ./Summary */ "./src/Summary.ts");
var width = 900;
var height = 600;
var app = new PIXI.Application({
    width: width,
    height: height,
    antialias: true,
});
var appContainer = document.getElementById("app_container");
appContainer.appendChild(app.view);
var table;
var chips;
var controls;
var dealer;
var cards;
var summary;
function loadAssets() {
    PIXI.loader
        .add("assets/backgroud.jpg")
        .add("assets/GameAssets.json")
        .add("assets/CardAssets.json")
        .load(run);
}
function run() {
    //background
    var texture_bg = PIXI.loader.resources["assets/backgroud.jpg"].texture;
    texture_bg.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    var sprite_bg = new PIXI.Sprite(texture_bg);
    app.stage.addChild(sprite_bg);
    //end background
    dealer = new Dealer_1.Dealer(update);
    table = new Table_1.Table(update, app);
    chips = new Chips_1.Chips(update, app);
    controls = new Controls_1.Controls(update, app);
    cards = new Cards_1.Cards(update, app);
    summary = new Summary_1.Summary(update, app);
}
function update(_params) {
    switch (_params.type) {
        case 'GET_BALANCE':
            return dealer.update(_params);
            break;
        case 'CHIP_SELECTED':
            table.update(_params);
            break;
        case 'GET_CHIP_VALUE':
            return chips.selectedChipValue;
            break;
        case 'SHOW_CONTROLS_BET':
        case 'HIDE_CONTROLS':
            controls.update(_params);
            break;
        case 'ERASE':
            table.update(_params);
            break;
        case 'DEAL':
            table.update(_params);
            _params.betData = table.update({ type: 'GET_BET_DATA' });
            dealer.update(_params);
            break;
        case 'DEAL_RESULT':
            cards.update(_params);
            break;
        case 'SHOW_RESULT':
            table.update(_params);
            break;
        case 'SHOW_SUMMARY':
            summary.update(_params);
            controls.update(_params);
            break;
        case 'RESET':
            summary.update(_params);
            table.update(_params);
            cards.update(_params);
            break;
        case 'REBET':
            summary.update(_params);
            table.update(_params);
            cards.update(_params);
            break;
    }
}
loadAssets();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhcmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9DaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlYWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURB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QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1QkFBdUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQSVhJID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnZhciBnc2FwID0gcmVxdWlyZShcImdzYXBcIik7XHJcbnZhciBUd2Vlbk1heCA9IGdzYXAuVHdlZW5NYXg7XHJcbnZhciBDYXJkcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhcmRzKF9tYWluVXBkYXRlLCBhcHApIHtcclxuICAgICAgICB0aGlzLm1haW5VcGRhdGUgPSBfbWFpblVwZGF0ZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgICAgICAvL3RoaXMucGxheWVyQ29udGFpbmVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJhbmtlckNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIC8vdGhpcy5iYW5rZXJDb250YWluZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FyZFNoZWV0ID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW1wiYXNzZXRzL0NhcmRBc3NldHMuanNvblwiXTtcclxuICAgICAgICB0aGlzLmNhcmRQb29sID0gW107XHJcbiAgICAgICAgLy9tYXggY2FyZHMgZm9yIGRpc3BsYXkgaXMgNlxyXG4gICAgICAgIHZhciBuZXdDYXJkO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld0NhcmQgPSB7XHJcbiAgICAgICAgICAgICAgICBmYWNlOiAnQTEnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBuZXcgUElYSS5TcHJpdGUodGhpcy5jYXJkU2hlZXQudGV4dHVyZXNbJ0MxX0Z1bGwucG5nJ10pLFxyXG4gICAgICAgICAgICAgICAgYmFja0NhcmQ6IG5ldyBQSVhJLlNwcml0ZSh0aGlzLmNhcmRTaGVldC50ZXh0dXJlc1snQkFDS19GdWxsLnBuZyddKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jYXJkUG9vbC5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllckNvdW50X3R4dCA9IG5ldyBQSVhJLlRleHQoJzAnLCBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgZmlsbDogWycjMDAwMEZGJ10sXHJcbiAgICAgICAgICAgIHN0cm9rZTogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ291bnRfdHh0LnBvc2l0aW9uLnNldCgyMDQsIDU2KTtcclxuICAgICAgICB0aGlzLnBsYXllckNvdW50X3R4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb3VudF90eHQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMucGxheWVyQ291bnRfdHh0KTtcclxuICAgICAgICB0aGlzLmJhbmtlckNvdW50X3R4dCA9IG5ldyBQSVhJLlRleHQoJzAnLCBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgZmlsbDogWycjRkYwMDAwJ10sXHJcbiAgICAgICAgICAgIHN0cm9rZTogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYmFua2VyQ291bnRfdHh0LnBvc2l0aW9uLnNldCg3MDAsIDU2KTtcclxuICAgICAgICB0aGlzLmJhbmtlckNvdW50X3R4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJDb3VudF90eHQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuYmFua2VyQ291bnRfdHh0KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBsYXllckNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5iYW5rZXJDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgQ2FyZHMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChfcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzd2l0Y2ggKF9wYXJhbXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdERUFMX1JFU1VMVCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdERhdGEgPSBfcGFyYW1zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc09uVGFibGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXREZWFsQ291bnQgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFBsYXllckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxCYW5rZXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ29udGFpbmVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkc1RvRGVhbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXN1bHREYXRhLlBsYXllckNhcmRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NhcmQgPSB0aGlzLmNhcmRQb29sW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDYXJkLmZhY2UgPSB0aGlzLnJlc3VsdERhdGEuUGxheWVyQ2FyZFtpXS5mYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDYXJkLnZhbHVlID0gdGhpcy5yZXN1bHREYXRhLlBsYXllckNhcmRbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQuaWNvbi50ZXh0dXJlID0gdGhpcy5jYXJkU2hlZXQudGV4dHVyZXNbbmV3Q2FyZC5mYWNlICsgJ19GdWxsLnBuZyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDYXJkLmljb24ucGl2b3Quc2V0KDQ5LCA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQuYmFja0NhcmQucGl2b3Quc2V0KDQ5LCA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQuYmFja0NhcmQucm90YXRpb24gPSAtMjAuMDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQuYmFja0NhcmQucG9zaXRpb24uc2V0KDg3MCwgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQudHlwZSA9ICdQJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZC50YXJnZXRQb3NpdGlvbiA9IHsgeDogMTkwLCB5OiAxODAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDYXJkLnRhcmdldFBvc2l0aW9uID0geyB4OiAyMTAsIHk6IDE4MCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQudGFyZ2V0UG9zaXRpb24gPSB7IHg6IDIzMCwgeTogMTgwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIuYWRkQ2hpbGQobmV3Q2FyZC5iYWNrQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2FyZHNUb0RlYWwucHVzaChuZXdDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0RGF0YS5CYW5rZXJDYXJkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdDYXJkID0gdGhpcy5jYXJkUG9vbFszICsgaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQuZmFjZSA9IHRoaXMucmVzdWx0RGF0YS5CYW5rZXJDYXJkW2ldLmZhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQudmFsdWUgPSB0aGlzLnJlc3VsdERhdGEuQmFua2VyQ2FyZFtpXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZC5pY29uLnRleHR1cmUgPSB0aGlzLmNhcmRTaGVldC50ZXh0dXJlc1tuZXdDYXJkLmZhY2UgKyAnX0Z1bGwucG5nJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQuaWNvbi5waXZvdC5zZXQoNDksIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZC5iYWNrQ2FyZC5waXZvdC5zZXQoNDksIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZC5iYWNrQ2FyZC5yb3RhdGlvbiA9IC0yMC4wNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZC5iYWNrQ2FyZC5wb3NpdGlvbi5zZXQoODcwLCA1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZC50eXBlID0gJ0InO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDYXJkLnRhcmdldFBvc2l0aW9uID0geyB4OiA2OTAsIHk6IDE4MCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhcmQudGFyZ2V0UG9zaXRpb24gPSB7IHg6IDcxMCwgeTogMTgwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZC50YXJnZXRQb3NpdGlvbiA9IHsgeDogNzMwLCB5OiAxODAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzVG9EZWFsLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoeyB0eXBlOiAnREVBTF9DQVJEJyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdERUFMX0NBUkQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsQ2FyZHNUb0RlYWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNPblRhYmxlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRDYXJkID0gdGhpcy5hbGxDYXJkc1RvRGVhbC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2FyZC5iYWNrQ2FyZC5zY2FsZS5zZXQoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1UaW1lID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50YXJnZXRDYXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQ291bnQgKz0gdGhpcy50YXJnZXRDYXJkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG90YWxQbGF5ZXJDb3VudCA+PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXJDb3VudCAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHRoaXMudGFyZ2V0Q2FyZC5iYWNrQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltVGltZSA9IDAuNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdCJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxCYW5rZXJDb3VudCArPSB0aGlzLnRhcmdldENhcmQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbEJhbmtlckNvdW50ID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEJhbmtlckNvdW50IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb250YWluZXIuYWRkQ2hpbGQodGhpcy50YXJnZXRDYXJkLmJhY2tDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1UaW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMudGFyZ2V0Q2FyZC5iYWNrQ2FyZCwgYW5pbVRpbWUsIHsgcm90YXRpb246IE1hdGguUEkgKiAyLCBlYXNlOiBnc2FwLkxpbmVhci5lYXNlTm9uZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLnRhcmdldENhcmQuYmFja0NhcmQsIGFuaW1UaW1lLCB7IHg6IHRoaXMudGFyZ2V0Q2FyZC50YXJnZXRQb3NpdGlvbi54LCB5OiB0aGlzLnRhcmdldENhcmQudGFyZ2V0UG9zaXRpb24ueSwgZWFzZTogZ3NhcC5MaW5lYXIuZWFzZU5vbmUsIG9uQ29tcGxldGU6IHRoaXMuY2FyZEFuaW1Db21wbGV0ZSwgb25Db21wbGV0ZVNjb3BlOiB0aGlzIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NIRUNLX0RSQVdfQ0FSRCc6XHJcbiAgICAgICAgICAgICAgICAvL3dhaXQgdGltZSBiZWZvcmUgZHJhd1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmFsbENhcmRzVG9EZWFsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0RGVhbENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZSh7IHR5cGU6ICdERUFMX0NBUkQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlKHsgdHlwZTogJ1NIT1dfUkVTVUxUJywgZGF0YTogX3RoaXMucmVzdWx0RGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdTSE9XX1JFU1VMVCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5VcGRhdGUoX3BhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUkVTRVQnOlxyXG4gICAgICAgICAgICBjYXNlICdSRUJFVCc6XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyZFBvb2wubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldENhcmQgPSB0aGlzLmNhcmRQb29sW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMudGFyZ2V0Q2FyZC5pY29uLCAwLjMsIHsgcm90YXRpb246IE1hdGguUEkgKiAyLCBlYXNlOiBnc2FwLkxpbmVhci5lYXNlTm9uZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLnRhcmdldENhcmQuaWNvbiwgMC4zLCB7IHg6IC0xMDAsIHk6IC0xMDAsIGVhc2U6IGdzYXAuTGluZWFyLmVhc2VOb25lLCBvbkNvbXBsZXRlU2NvcGU6IHRoaXMgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FyZHMucHJvdG90eXBlLmNhcmRBbmltQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDYXJkLmljb24ucG9zaXRpb24gPSB0aGlzLnRhcmdldENhcmQuYmFja0NhcmQucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy50YXJnZXRDYXJkLmljb24uc2NhbGUuc2V0KDAsIDEpO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMudGFyZ2V0Q2FyZC5iYWNrQ2FyZC5zY2FsZSwgMC4yLCB7IHg6IDAsIGVhc2U6IGdzYXAuTGluZWFyLmVhc2VOb25lLCBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLnRhcmdldENhcmQuaWNvbi5zY2FsZSwgMC4yLCB7IHg6IDEsIGVhc2U6IGdzYXAuTGluZWFyLmVhc2VOb25lLCBvbkNvbXBsZXRlU2NvcGU6IHRoaXMsIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhcmdldENhcmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudF90eHQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudF90eHQudGV4dCA9IHRoaXMudG90YWxQbGF5ZXJDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnRfdHh0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnRfdHh0LnRleHQgPSB0aGlzLnRvdGFsQmFua2VyQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZHNPblRhYmxlIDwgdGhpcy50YXJnZXREZWFsQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKHsgdHlwZTogJ0RFQUxfQ0FSRCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IHR5cGU6ICdDSEVDS19EUkFXX0NBUkQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9KTtcclxuICAgICAgICAgICAgfSwgb25Db21wbGV0ZVNjb3BlOiB0aGlzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnRhcmdldENhcmQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdQJzpcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5wbGF5ZXJDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXRDYXJkLmJhY2tDYXJkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHRoaXMudGFyZ2V0Q2FyZC5pY29uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdCJzpcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5iYW5rZXJDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXRDYXJkLmJhY2tDYXJkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ29udGFpbmVyLmFkZENoaWxkKHRoaXMudGFyZ2V0Q2FyZC5pY29uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FyZHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2FyZHMgPSBDYXJkcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIENoaXBzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2hpcHMoX21haW5VcGRhdGUsIGFwcCkge1xyXG4gICAgICAgIHRoaXMuYWxsRGVub21pbmF0aW9uID0gWzEwLCAyMCwgNTAsIDEwMCwgMjUwXTtcclxuICAgICAgICB0aGlzLm1haW5VcGRhdGUgPSBfbWFpblVwZGF0ZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdmFyIGdhbWVTaGVldCA9IFBJWEkubG9hZGVyLnJlc291cmNlc1tcImFzc2V0cy9HYW1lQXNzZXRzLmpzb25cIl07XHJcbiAgICAgICAgdGhpcy5hbGxDaGlwcyA9IHt9O1xyXG4gICAgICAgIHZhciBuZXdDaGlwID0ge307XHJcbiAgICAgICAgdmFyIG5ld0J1dHRvbjtcclxuICAgICAgICB2YXIgbmV3SWNvbjtcclxuICAgICAgICB2YXIgbmV3VHh0O1xyXG4gICAgICAgIHZhciB0eHRTdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICBmaWxsOiBbJyNmZmZmZmYnLCAnIzAwZmY5OSddLFxyXG4gICAgICAgICAgICBzdHJva2U6ICcjNGExODUwJyxcclxuICAgICAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93OiB0cnVlLFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93Q29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgZHJvcFNoYWRvd0JsdXI6IDQsXHJcbiAgICAgICAgICAgIGRyb3BTaGFkb3dBbmdsZTogTWF0aC5QSSAvIDYsXHJcbiAgICAgICAgICAgIGRyb3BTaGFkb3dEaXN0YW5jZTogNixcclxuICAgICAgICAgICAgd29yZFdyYXA6IHRydWUsXHJcbiAgICAgICAgICAgIHdvcmRXcmFwV2lkdGg6IDQ0MCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsRGVub21pbmF0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaXAgPSB7fTtcclxuICAgICAgICAgICAgbmV3Q2hpcC52YWx1ZSA9IHRoaXMuYWxsRGVub21pbmF0aW9uW2ldO1xyXG4gICAgICAgICAgICBuZXdDaGlwLm5hbWUgPSAnQ2hpcF8nICsgdGhpcy5hbGxEZW5vbWluYXRpb25baV07XHJcbiAgICAgICAgICAgIG5ld0NoaXAuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG5ld0NoaXAuY29udGFpbmVyKTtcclxuICAgICAgICAgICAgbmV3Q2hpcC50ZXh0dXJlID0gZ2FtZVNoZWV0LnRleHR1cmVzW1wiY2hpcHNcIiArIGkgKyBcIi5wbmdcIl07XHJcbiAgICAgICAgICAgIG5ld0NoaXAudGV4dHVyZV9zZWxlY3RlZCA9IGdhbWVTaGVldC50ZXh0dXJlc1tcImNoaXBzXCIgKyBpICsgXCJfc2VsZWN0ZWQucG5nXCJdO1xyXG4gICAgICAgICAgICBuZXdJY29uID0gbmV3IFBJWEkuU3ByaXRlKG5ld0NoaXAudGV4dHVyZSk7XHJcbiAgICAgICAgICAgIG5ld1R4dCA9IG5ldyBQSVhJLlRleHQodGhpcy5hbGxEZW5vbWluYXRpb25baV0udG9TdHJpbmcoKSwgdHh0U3R5bGUpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBuZXdJY29uLnBvc2l0aW9uLnNldCg4MSwgNDEyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdUeHQucG9zaXRpb24uc2V0KDExMCwgNDQwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBuZXdJY29uLnBvc2l0aW9uLnNldCgyNDIsIDQ1Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHh0LnBvc2l0aW9uLnNldCgyNzQsIDQ4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SWNvbi5wb3NpdGlvbi5zZXQoNDAyLCA0NjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1R4dC5wb3NpdGlvbi5zZXQoNDM0LCA0OTQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ljb24ucG9zaXRpb24uc2V0KDU2MywgNDUzKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdUeHQucG9zaXRpb24uc2V0KDU4NiwgNDgyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBuZXdJY29uLnBvc2l0aW9uLnNldCg3MjEsIDQwOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHh0LnBvc2l0aW9uLnNldCg3NDYsIDQzOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3SWNvbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5ld0ljb24uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5ld0ljb24ubmFtZSA9ICdDaGlwXycgKyB0aGlzLmFsbERlbm9taW5hdGlvbltpXTtcclxuICAgICAgICAgICAgdGhpcy5hbGxDaGlwc1snQ2hpcF8nICsgdGhpcy5hbGxEZW5vbWluYXRpb25baV1dID0gbmV3Q2hpcDtcclxuICAgICAgICAgICAgbmV3SWNvbi5vbigncG9pbnRlcmRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldERhdGE7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzLmFsbENoaXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9IHRoaXMuYWxsQ2hpcHNbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGEuaWNvbi50ZXh0dXJlID0gdGFyZ2V0RGF0YS50ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9IHRoaXMuYWxsQ2hpcHNbZS50YXJnZXQubmFtZV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhLmljb24udGV4dHVyZSA9IHRhcmdldERhdGEudGV4dHVyZV9zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwVmFsdWUgPSB0YXJnZXREYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluVXBkYXRlKHsgdHlwZTogJ0NISVBfU0VMRUNURUQnLCB2YWx1ZTogdGhpcy5zZWxlY3RlZENoaXBWYWx1ZSB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIG5ld0NoaXAuaWNvbiA9IG5ld0ljb247XHJcbiAgICAgICAgICAgIG5ld0NoaXAuY29udGFpbmVyLmFkZENoaWxkKG5ld0ljb24sIG5ld1R4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZGVmYXVsdCBjaGlwc1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwVmFsdWUgPSB0aGlzLmFsbENoaXBzWydDaGlwXycgKyB0aGlzLmFsbERlbm9taW5hdGlvblswXS50b1N0cmluZygpXS52YWx1ZTtcclxuICAgICAgICB0aGlzLmFsbENoaXBzWydDaGlwXycgKyB0aGlzLmFsbERlbm9taW5hdGlvblswXS50b1N0cmluZygpXS5pY29uLnRleHR1cmUgPSB0aGlzLmFsbENoaXBzWydDaGlwXycgKyB0aGlzLmFsbERlbm9taW5hdGlvblswXS50b1N0cmluZygpXS50ZXh0dXJlX3NlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMubWFpblVwZGF0ZSh7IHR5cGU6ICdDSElQX1NFTEVDVEVEJywgdmFsdWU6IHRoaXMuc2VsZWN0ZWRDaGlwVmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2hpcHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2hpcHMgPSBDaGlwcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIENvbnRyb2xzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29udHJvbHMoX21haW5VcGRhdGUsIF9hcHApIHtcclxuICAgICAgICB0aGlzLm1haW5VcGRhdGUgPSBfbWFpblVwZGF0ZTtcclxuICAgICAgICB0aGlzLmFwcCA9IF9hcHA7XHJcbiAgICAgICAgdGhpcy5pc1N1bW1hcnkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB2YXIgZ2FtZVNoZWV0ID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW1wiYXNzZXRzL0dhbWVBc3NldHMuanNvblwiXTtcclxuICAgICAgICAvL2RlYWxcclxuICAgICAgICB0aGlzLmRlYWxfYnRuID0ge1xyXG4gICAgICAgICAgICB0ZXh0dXJlOiBnYW1lU2hlZXQudGV4dHVyZXNbXCJidG5fY29udHJvbHNfc2VuZF9tb3VzZW91dC5wbmdcIl0sXHJcbiAgICAgICAgICAgIHRleHR1cmVfbW91c2VvdmVyOiBnYW1lU2hlZXQudGV4dHVyZXNbXCJidG5fY29udHJvbHNfc2VuZF9tb3VzZW92ZXIucG5nXCJdLFxyXG4gICAgICAgICAgICBpY29uOiBuZXcgUElYSS5TcHJpdGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVhbF9idG4uaWNvbi50ZXh0dXJlID0gdGhpcy5kZWFsX2J0bi50ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuZGVhbF9idG4uaWNvbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWFsX2J0bi5pY29uLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVhbF9idG4uaWNvbi5wb3NpdGlvbi5zZXQoNzk4LCAxMjQpO1xyXG4gICAgICAgIHRoaXMuZGVhbF9idG4uaWNvbi5vbigncG9pbnRlcmRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IHR5cGU6ICdISURFX0NPTlRST0xTJyB9KTtcclxuICAgICAgICAgICAgdGhpcy5tYWluVXBkYXRlKHsgdHlwZTogJ0RFQUwnLCB9KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRlYWxfYnRuLmljb24ub24oJ3BvaW50ZXJvdmVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWFsX2J0bi5pY29uLnRleHR1cmUgPSB0aGlzLmRlYWxfYnRuLnRleHR1cmVfbW91c2VvdmVyO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVhbF9idG4uaWNvbi5vbigncG9pbnRlcm91dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhbF9idG4uaWNvbi50ZXh0dXJlID0gdGhpcy5kZWFsX2J0bi50ZXh0dXJlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5kZWFsX2J0bi5pY29uKTtcclxuICAgICAgICAvL2VyYXNlXHJcbiAgICAgICAgdGhpcy5lcmFzZV9idG4gPSB7XHJcbiAgICAgICAgICAgIHRleHR1cmU6IGdhbWVTaGVldC50ZXh0dXJlc1tcImJ0bl9jb250cm9sc19lcmFzZV9tb3VzZW91dC5wbmdcIl0sXHJcbiAgICAgICAgICAgIHRleHR1cmVfbW91c2VvdmVyOiBnYW1lU2hlZXQudGV4dHVyZXNbXCJidG5fY29udHJvbHNfZXJhc2VfbW91c2VvdmVyLnBuZ1wiXSxcclxuICAgICAgICAgICAgaWNvbjogbmV3IFBJWEkuU3ByaXRlKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmVyYXNlX2J0bi5pY29uLnRleHR1cmUgPSB0aGlzLmVyYXNlX2J0bi50ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuZXJhc2VfYnRuLmljb24uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZXJhc2VfYnRuLmljb24uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lcmFzZV9idG4uaWNvbi5wb3NpdGlvbi5zZXQoNzk4LCAyNTIpO1xyXG4gICAgICAgIHRoaXMuZXJhc2VfYnRuLmljb24ub24oJ3BvaW50ZXJkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoeyB0eXBlOiAnSElERV9DT05UUk9MUycgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3VtbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1bW1hcnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpblVwZGF0ZSh7IHR5cGU6ICdSRVNFVCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5VcGRhdGUoeyB0eXBlOiAnRVJBU0UnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5lcmFzZV9idG4uaWNvbi5vbigncG9pbnRlcm92ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVyYXNlX2J0bi5pY29uLnRleHR1cmUgPSB0aGlzLmVyYXNlX2J0bi50ZXh0dXJlX21vdXNlb3ZlcjtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmVyYXNlX2J0bi5pY29uLm9uKCdwb2ludGVyb3V0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lcmFzZV9idG4uaWNvbi50ZXh0dXJlID0gdGhpcy5lcmFzZV9idG4udGV4dHVyZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAvL3RoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuZXJhc2VfYnRuLmljb24pO1xyXG4gICAgICAgIC8vcmViZXRcclxuICAgICAgICB0aGlzLnJlYmV0X2J0biA9IHtcclxuICAgICAgICAgICAgdGV4dHVyZTogZ2FtZVNoZWV0LnRleHR1cmVzW1wiYnRuX2NvbnRyb2xzX3JlYmV0X21vdXNlb3V0LnBuZ1wiXSxcclxuICAgICAgICAgICAgdGV4dHVyZV9tb3VzZW92ZXI6IGdhbWVTaGVldC50ZXh0dXJlc1tcImJ0bl9jb250cm9sc19yZWJldF9tb3VzZW92ZXIucG5nXCJdLFxyXG4gICAgICAgICAgICBpY29uOiBuZXcgUElYSS5TcHJpdGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmViZXRfYnRuLmljb24udGV4dHVyZSA9IHRoaXMucmViZXRfYnRuLnRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5yZWJldF9idG4uaWNvbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZWJldF9idG4uaWNvbi5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlYmV0X2J0bi5pY29uLnBvc2l0aW9uLnNldCg3OTgsIDEyNCk7XHJcbiAgICAgICAgdGhpcy5yZWJldF9idG4uaWNvbi5vbigncG9pbnRlcmRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IHR5cGU6ICdISURFX0NPTlRST0xTJyB9KTtcclxuICAgICAgICAgICAgdGhpcy5tYWluVXBkYXRlKHsgdHlwZTogJ1JFQkVUJywgfSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWJldF9idG4uaWNvbi5vbigncG9pbnRlcm92ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYmV0X2J0bi5pY29uLnRleHR1cmUgPSB0aGlzLnJlYmV0X2J0bi50ZXh0dXJlX21vdXNlb3ZlcjtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlYmV0X2J0bi5pY29uLm9uKCdwb2ludGVyb3V0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWJldF9idG4uaWNvbi50ZXh0dXJlID0gdGhpcy5yZWJldF9idG4udGV4dHVyZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAvL3RoaXMudXBkYXRlKHt0eXBlOidISURFX0NPTlRST0xTJ30pO1xyXG4gICAgICAgIC8vdGhpcy51cGRhdGUoe3R5cGU6J1NIT1dfU1VNTUFSWSd9KTtcclxuICAgIH1cclxuICAgIENvbnRyb2xzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoX3BhcmFtcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0NPTlRST0xTIFVQREFURScsX3BhcmFtcyk7XHJcbiAgICAgICAgc3dpdGNoIChfcGFyYW1zLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnSElERV9DT05UUk9MUyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnJlYmV0X2J0bi5pY29uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZXJhc2VfYnRuLmljb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5kZWFsX2J0bi5pY29uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdTSE9XX0NPTlRST0xTX0JFVCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmVyYXNlX2J0bi5pY29uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuZGVhbF9idG4uaWNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnU0hPV19TVU1NQVJZJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChfcGFyYW1zLmRhdGEuYWxsb3dSZWJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMucmViZXRfYnRuLmljb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5lcmFzZV9idG4uaWNvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VtbWFyeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbnRyb2xzO1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbnRyb2xzID0gQ29udHJvbHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBEZWFsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEZWFsZXIoX21haW5VcGRhdGUpIHtcclxuICAgICAgICB0aGlzLm1haW5VcGRhdGUgPSBfbWFpblVwZGF0ZTtcclxuICAgICAgICB0aGlzLmRlY2tDb3VudCA9IDg7XHJcbiAgICAgICAgdGhpcy5hbGxDYXJkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9IDEyMDA7XHJcbiAgICAgICAgdmFyIG5ld0NhcmQ7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTM7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZGVja0NvdW50OyBhKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NsdWJcclxuICAgICAgICAgICAgICAgICAgICBuZXdDYXJkID0geyBmYWNlOiAnQycgKyBpLCB2YWx1ZTogaSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2FyZHMucHVzaChuZXdDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1NwYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZCA9IHsgZmFjZTogJ1MnICsgaSwgdmFsdWU6IGkgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9IZWFydFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NhcmQgPSB7IGZhY2U6ICdIJyArIGksIHZhbHVlOiBpIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkcy5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NhcmQgPSB7IGZhY2U6ICdEJyArIGksIHZhbHVlOiBpIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkcy5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2x1YlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NhcmQgPSB7IGZhY2U6ICdDMCcsIHZhbHVlOiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkcy5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vU3BhZGVcclxuICAgICAgICAgICAgICAgICAgICBuZXdDYXJkID0geyBmYWNlOiAnUzAnLCB2YWx1ZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2FyZHMucHVzaChuZXdDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL0hlYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZCA9IHsgZmFjZTogJ0gwJywgdmFsdWU6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EaWFtb25kXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZCA9IHsgZmFjZTogJ0QwJywgdmFsdWU6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpID09IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DbHViXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZCA9IHsgZmFjZTogJ0NKJywgdmFsdWU6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9TcGFkZVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NhcmQgPSB7IGZhY2U6ICdTSicsIHZhbHVlOiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkcy5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSGVhcnRcclxuICAgICAgICAgICAgICAgICAgICBuZXdDYXJkID0geyBmYWNlOiAnSEonLCB2YWx1ZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2FyZHMucHVzaChuZXdDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL0RpYW1vbmRcclxuICAgICAgICAgICAgICAgICAgICBuZXdDYXJkID0geyBmYWNlOiAnREonLCB2YWx1ZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2FyZHMucHVzaChuZXdDYXJkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NsdWJcclxuICAgICAgICAgICAgICAgICAgICBuZXdDYXJkID0geyBmYWNlOiAnQ1EnLCB2YWx1ZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2FyZHMucHVzaChuZXdDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1NwYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZCA9IHsgZmFjZTogJ1NRJywgdmFsdWU6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9IZWFydFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NhcmQgPSB7IGZhY2U6ICdIUScsIHZhbHVlOiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkcy5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NhcmQgPSB7IGZhY2U6ICdEUScsIHZhbHVlOiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkcy5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAxMykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2x1YlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NhcmQgPSB7IGZhY2U6ICdDSycsIHZhbHVlOiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDYXJkcy5wdXNoKG5ld0NhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vU3BhZGVcclxuICAgICAgICAgICAgICAgICAgICBuZXdDYXJkID0geyBmYWNlOiAnU0snLCB2YWx1ZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2FyZHMucHVzaChuZXdDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL0hlYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZCA9IHsgZmFjZTogJ0hLJywgdmFsdWU6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EaWFtb25kXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2FyZCA9IHsgZmFjZTogJ0RLJywgdmFsdWU6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcmRzLnB1c2gobmV3Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGUoeyB0eXBlOiAnU0hVRkZMRV9DQVJEJyB9KTtcclxuICAgIH1cclxuICAgIERlYWxlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKF9wYXJhbXMpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgc3dpdGNoIChfcGFyYW1zLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnSElERV9DT05UUk9MUyc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnREVBTCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaHVmZmxlZENhcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKHsgdHlwZTogJ1NIVUZGTEVfQ0FSRCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2lldmVkQmV0cyA9IF9wYXJhbXMuYmV0RGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZSAtPSAodGhpcy5yZWNpZXZlZEJldHMucGxheWVyICsgdGhpcy5yZWNpZXZlZEJldHMuYmFua2VyICsgdGhpcy5yZWNpZXZlZEJldHMudGllKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ2FyZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDYXJkID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy9maXJzdCBjYXJkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZWRDYXJkID0gdGhpcy5zaHVmZmxlZENhcmQuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ2FyZC5wdXNoKHRoaXMucmVtb3ZlZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudCA9IHRoaXMucmVtb3ZlZENhcmQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZWRDYXJkID0gdGhpcy5zaHVmZmxlZENhcmQuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ2FyZC5wdXNoKHRoaXMucmVtb3ZlZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb3VudCA9IHRoaXMucmVtb3ZlZENhcmQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLzJuZCBjYXJkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZWRDYXJkID0gdGhpcy5zaHVmZmxlZENhcmQuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ2FyZC5wdXNoKHRoaXMucmVtb3ZlZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudCArPSB0aGlzLnJlbW92ZWRDYXJkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ291bnQgPj0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNvdW50IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2FyZCA9IHRoaXMuc2h1ZmZsZWRDYXJkLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNhcmQucHVzaCh0aGlzLnJlbW92ZWRDYXJkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnQgKz0gdGhpcy5yZW1vdmVkQ2FyZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbmtlckNvdW50ID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb3VudCAtPSAxMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgZm9yIDNyZCBjYXJkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjNyZENhcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy9uYXR1cmFsIGNhcmRzXHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBQbGF5ZXIgKG9yIEJhbmtlcikgaXMgZGVhbHQgYSBzY29yZSBvZiA4IG9yIDkgaW4gdGhlaXIgZmlyc3QgdHdvIGNhcmRzLCBrbm93biBhcyBhIOKAmG5hdHVyYWzigJkgaGFuZCwgdGhleSB3aW4gKG9yIHRpZSBpZiB0aGUgb3Bwb3NpbmcgaGFuZCBpcyB3b3J0aCB0aGUgc2FtZSBudW1iZXIgb2YgcG9pbnRzKSwgYW5kIGEgbmV3IGRlYWwgYmVnaW5zLiBBIG5hdHVyYWwgOSB3aWxsIGJlYXQgYSBuYXR1cmFsIDguXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDb3VudCA+PSA4IHx8IHRoaXMuYmFua2VyQ291bnQgPj0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbm8gZHJhdyBuYXR1cmFsIGNhcmRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZSBQbGF5ZXLigJlzIGZpcnN0IHR3byBjYXJkcyBlcXVhbCAwLTUsIHRoZSBQbGF5ZXIgbXVzdCBkcmF3IGEgdGhpcmQgY2FyZC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDb3VudCA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZENhcmQgPSB0aGlzLnNodWZmbGVkQ2FyZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNhcmQucHVzaCh0aGlzLnJlbW92ZWRDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudCArPSB0aGlzLnJlbW92ZWRDYXJkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDb3VudCA+PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudCAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjNyZENhcmQgPSB0aGlzLnJlbW92ZWRDYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdQbGF5ZXIgPD0gNSBEcmF3IGNhcmQnLHRoaXMucGxheWVyQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbmtlckNvdW50IDw9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQXV0b21hdGljYWxseSBkcmF3c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2FyZCA9IHRoaXMuc2h1ZmZsZWRDYXJkLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNhcmQucHVzaCh0aGlzLnJlbW92ZWRDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnQgKz0gdGhpcy5yZW1vdmVkQ2FyZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbmtlckNvdW50ID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb3VudCAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0RlYWxlciA8PSAyIERyYXcgY2FyZCcsdGhpcy5iYW5rZXJDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhbmtlckNvdW50ID09IDMgJiYgdGhpcy5wbGF5ZXIzcmRDYXJkLnZhbHVlIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiBQbGF5ZXIgZHJhd3MgYW55IHRoaXJkIGNhcmQgKHVubGVzcyBpdCBpcyBhbiA4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2FyZCA9IHRoaXMuc2h1ZmZsZWRDYXJkLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNhcmQucHVzaCh0aGlzLnJlbW92ZWRDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnQgKz0gdGhpcy5yZW1vdmVkQ2FyZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbmtlckNvdW50ID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb3VudCAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0RlYWxlciA9PSAzIERyYXcgY2FyZCBpZiBub3QgODogJyx0aGlzLnBsYXllcjNyZENhcmQudmFsdWUsdGhpcy5iYW5rZXJDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhbmtlckNvdW50ID09IDQgJiYgdGhpcy5wbGF5ZXIzcmRDYXJkLnZhbHVlID49IDIgJiYgdGhpcy5wbGF5ZXIzcmRDYXJkLnZhbHVlIDw9IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgUGxheWVyIGRyYXdzIGEgdGhpcmQgY2FyZCBiZXR3ZWVuIDItN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2FyZCA9IHRoaXMuc2h1ZmZsZWRDYXJkLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNhcmQucHVzaCh0aGlzLnJlbW92ZWRDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnQgKz0gdGhpcy5yZW1vdmVkQ2FyZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbmtlckNvdW50ID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb3VudCAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0RlYWxlciA9PSA0IERyYXcgY2FyZCBpZiBub3QgMi03OiAnLHRoaXMucGxheWVyM3JkQ2FyZC52YWx1ZSx0aGlzLmJhbmtlckNhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYmFua2VyQ291bnQgPT0gNSAmJiB0aGlzLnBsYXllcjNyZENhcmQudmFsdWUgPj0gNCAmJiB0aGlzLnBsYXllcjNyZENhcmQudmFsdWUgPD0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiBQbGF5ZXIgZHJhd3MgYSB0aGlyZCBjYXJkIGJldHdlZW4gNC03XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZWRDYXJkID0gdGhpcy5zaHVmZmxlZENhcmQuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ2FyZC5wdXNoKHRoaXMucmVtb3ZlZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb3VudCArPSB0aGlzLnJlbW92ZWRDYXJkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFua2VyQ291bnQgPj0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNvdW50IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnRGVhbGVyID09IDUgRHJhdyBjYXJkIGlmIG5vdCA0LTc6ICcsdGhpcy5wbGF5ZXIzcmRDYXJkLnZhbHVlLHRoaXMuYmFua2VyQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5iYW5rZXJDb3VudCA9PSA2ICYmIHRoaXMucGxheWVyM3JkQ2FyZC52YWx1ZSA+PSA2ICYmIHRoaXMucGxheWVyM3JkQ2FyZC52YWx1ZSA8PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIFBsYXllciBkcmF3cyBhIHRoaXJkIGNhcmQgYmV0d2VlbiA2LTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZENhcmQgPSB0aGlzLnNodWZmbGVkQ2FyZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDYXJkLnB1c2godGhpcy5yZW1vdmVkQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNvdW50ICs9IHRoaXMucmVtb3ZlZENhcmQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iYW5rZXJDb3VudCA+PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ291bnQgLT0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdEZWFsZXIgPT0gNiBEcmF3IGNhcmQgaWYgbm90IDYtNzogJyx0aGlzLnBsYXllcjNyZENhcmQudmFsdWUsdGhpcy5iYW5rZXJDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhbmtlckNvdW50ID49IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRG9lcyBub3QgZHJhd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgdGhlIFBsYXllcuKAmXMgZmlyc3QgdHdvIGNhcmRzIGVxdWFsIDYgb3IgNywgdGhleSBjYW5ub3QgZHJhdyBhIHRoaXJkIGNhcmQgYW5kIHRoZSBCYW5rZXIgd2lsbCBkcmF3IG9uIGEgc2NvcmUgb2YgMC01XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ291bnQgPj0gNiAmJiB0aGlzLnBsYXllckNvdW50IDw9IDcgJiYgdGhpcy5wbGF5ZXIzcmRDYXJkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnUGxheWVyID09IDYtNywgYmFua2VyIERyYXcgY2FyZCBpZiAgMC01OiAnLHRoaXMuYmFua2VyQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iYW5rZXJDb3VudCA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZWRDYXJkID0gdGhpcy5zaHVmZmxlZENhcmQuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyQ2FyZC5wdXNoKHRoaXMucmVtb3ZlZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJDb3VudCArPSB0aGlzLnJlbW92ZWRDYXJkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFua2VyQ291bnQgPj0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNvdW50IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ291bnQgPj0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNvdW50IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFua2VyQ291bnQgPj0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlckNvdW50IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXlvdXRzID0geyBwbGF5ZXI6IDAsIGJhbmtlcjogMCwgdGllOiAwIH07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDb3VudCA+IHRoaXMuYmFua2VyQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpblJlc3VsdCA9ICdQJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWNpZXZlZEJldHMucGxheWVyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBheW91dHMucGxheWVyID0gdGhpcy5yZWNpZXZlZEJldHMucGxheWVyICogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlICs9IHRoaXMucGF5b3V0cy5wbGF5ZXIgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYmFua2VyQ291bnQgPiB0aGlzLnBsYXllckNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5SZXN1bHQgPSAnQic7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVjaWV2ZWRCZXRzLmJhbmtlciA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlvdXRzLmJhbmtlciA9IHRoaXMucmVjaWV2ZWRCZXRzLmJhbmtlciAqIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZSArPSB0aGlzLnBheW91dHMuYmFua2VyICogMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpblJlc3VsdCA9ICdUJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWNpZXZlZEJldHMudGllID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBheW91dHMudGllID0gdGhpcy5yZWNpZXZlZEJldHMudGllICogODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlICs9IHRoaXMucGF5b3V0cy50aWUgKyB0aGlzLnJlY2lldmVkQmV0cy50aWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVBTF9SRVNVTFQnLFxyXG4gICAgICAgICAgICAgICAgICAgIFBsYXllckNhcmQ6IHRoaXMucGxheWVyQ2FyZCxcclxuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJDb3VudDogdGhpcy5wbGF5ZXJDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBCYW5rZXJDYXJkOiB0aGlzLmJhbmtlckNhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgQmFua2VyQ291bnQ6IHRoaXMuYmFua2VyQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgV2luUmVzdWx0OiB0aGlzLndpblJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBwYXlvdXQ6IHRoaXMucGF5b3V0cyxcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdTSFVGRkxFX0NBUkQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaHVmZmxlZENhcmQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsQ2FyZHMpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnNodWZmbGVkQ2FyZC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IFt0aGlzLnNodWZmbGVkQ2FyZFtqXSwgdGhpcy5zaHVmZmxlZENhcmRbaV1dLCB0aGlzLnNodWZmbGVkQ2FyZFtpXSA9IF9hWzBdLCB0aGlzLnNodWZmbGVkQ2FyZFtqXSA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jdXQgY2FyZCwgZ2V0IGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGFuZCB0aHJvdyBpdCBhd2F5LCAzMC03MDtcclxuICAgICAgICAgICAgICAgIHZhciBjdXRSYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoNzAgLSAzMCkgKyAzMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNodWZmbGVkQ2FyZC5zcGxpY2UodGhpcy5zaHVmZmxlZENhcmQubGVuZ3RoIC0gY3V0UmFuZG9tLCBjdXRSYW5kb20pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVF9CQUxBTkNFJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhbGFuY2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERlYWxlcjtcclxufSgpKTtcclxuZXhwb3J0cy5EZWFsZXIgPSBEZWFsZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQSVhJID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnZhciBTdW1tYXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3VtbWFyeShfbWFpblVwZGF0ZSwgX2FwcCkge1xyXG4gICAgICAgIHRoaXMubWFpblVwZGF0ZSA9IF9tYWluVXBkYXRlO1xyXG4gICAgICAgIHRoaXMuYXBwID0gX2FwcDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIC8vdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMud2lubmVyQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy53aW5uZXJDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMud2lubmVyQkcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMud2lubmVyQkcubGluZVN0eWxlKDIsIDB4OTk5OTk5LCAxKTtcclxuICAgICAgICB0aGlzLndpbm5lckJHLmJlZ2luRmlsbCgweENDQ0NDQyk7XHJcbiAgICAgICAgdGhpcy53aW5uZXJCRy5kcmF3UmVjdCgwLCAwLCA0MDAsIDYwKTtcclxuICAgICAgICB0aGlzLndpbm5lckJHLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLndpbm5lckJHLnBvc2l0aW9uLnNldCgoOTAwIC0gNDAwKSAvIDIsIDE4MCk7XHJcbiAgICAgICAgdGhpcy53aW5uZXJDb250YWluZXIuYWRkQ2hpbGQodGhpcy53aW5uZXJCRyk7XHJcbiAgICAgICAgdGhpcy53aW5uZXJMYWJlbF90eHQgPSBuZXcgUElYSS5UZXh0KCdQTEFZRVIgV0lOUycsIG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICBmaWxsOiBbJyMwMDAwMDAnXSxcclxuICAgICAgICAgICAgc3Ryb2tlOiAnI0ZGRkYwMCcsXHJcbiAgICAgICAgICAgIHN0cm9rZVRoaWNrbmVzczogNCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy53aW5uZXJMYWJlbF90eHQucG9zaXRpb24uc2V0KDkwMCAvIDIsIDIxMCk7XHJcbiAgICAgICAgdGhpcy53aW5uZXJMYWJlbF90eHQuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMud2lubmVyQ29udGFpbmVyLmFkZENoaWxkKHRoaXMud2lubmVyTGFiZWxfdHh0KTtcclxuICAgICAgICB0aGlzLnlvdVdvbkNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy55b3VXb25Db250YWluZXIpO1xyXG4gICAgICAgIHRoaXMueW91V29uQkcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMueW91V29uQkcubGluZVN0eWxlKDIsIDB4OTk5OTk5LCAxKTtcclxuICAgICAgICB0aGlzLnlvdVdvbkJHLmJlZ2luRmlsbCgweENDQ0NDQyk7XHJcbiAgICAgICAgdGhpcy55b3VXb25CRy5kcmF3UmVjdCgwLCAwLCA0MDAsIDgwKTtcclxuICAgICAgICB0aGlzLnlvdVdvbkJHLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnlvdVdvbkJHLnBvc2l0aW9uLnNldCgoOTAwIC0gNDAwKSAvIDIsIDI1Nik7XHJcbiAgICAgICAgdGhpcy55b3VXb25Db250YWluZXIuYWRkQ2hpbGQodGhpcy55b3VXb25CRyk7XHJcbiAgICAgICAgdGhpcy55b3VXb25MYWJlbF90eHQgPSBuZXcgUElYSS5UZXh0KCdZT1UgSEFWRSBXT04nLCBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgZmlsbDogWycjMDAwMDAwJ10sXHJcbiAgICAgICAgICAgIHN0cm9rZTogJyNGRkZGMDAnLFxyXG4gICAgICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMueW91V29uTGFiZWxfdHh0LnBvc2l0aW9uLnNldCg5MDAgLyAyLCAyODApO1xyXG4gICAgICAgIHRoaXMueW91V29uTGFiZWxfdHh0LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnlvdVdvbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnlvdVdvbkxhYmVsX3R4dCk7XHJcbiAgICAgICAgdGhpcy55b3VXb25WYWx1ZV90eHQgPSBuZXcgUElYSS5UZXh0KCc5OTkuMDAnLCBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzQsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgZmlsbDogWycjMDAwMDAwJ10sXHJcbiAgICAgICAgICAgIHN0cm9rZTogJyNGRkZGMDAnLFxyXG4gICAgICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMueW91V29uVmFsdWVfdHh0LnBvc2l0aW9uLnNldCg5MDAgLyAyLCAzMTApO1xyXG4gICAgICAgIHRoaXMueW91V29uVmFsdWVfdHh0LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnlvdVdvbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnlvdVdvblZhbHVlX3R4dCk7XHJcbiAgICB9XHJcbiAgICBTdW1tYXJ5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoX3BhcmFtcykge1xyXG4gICAgICAgIHN3aXRjaCAoX3BhcmFtcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NIT1dfU1VNTUFSWSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9wYXJhbXMuZGF0YS5XaW5SZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uZXJMYWJlbF90eHQudGV4dCA9ICdQTEFZRVIgV0lOUyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5lckxhYmVsX3R4dC50ZXh0ID0gJ0JBTktFUiBXSU5TJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmVyTGFiZWxfdHh0LnRleHQgPSAnVElFIFdJTlMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxXaW4gPSBfcGFyYW1zLmRhdGEucGF5b3V0LnBsYXllciArIF9wYXJhbXMuZGF0YS5wYXlvdXQuYmFua2VyICsgX3BhcmFtcy5kYXRhLnBheW91dC50aWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbFdpbiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnlvdVdvblZhbHVlX3R4dC50ZXh0ID0gdGhpcy50b3RhbFdpbi50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMueW91V29uQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdSRVNFVCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1JFQkVUJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMueW91V29uQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gU3VtbWFyeTtcclxufSgpKTtcclxuZXhwb3J0cy5TdW1tYXJ5ID0gU3VtbWFyeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIGdzYXAgPSByZXF1aXJlKFwiZ3NhcFwiKTtcclxudmFyIFR3ZWVuTWF4ID0gZ3NhcC5Ud2Vlbk1heDtcclxudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGFibGUoX3VwZGF0ZSwgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5tYWluVXBkYXRlID0gX3VwZGF0ZTtcclxuICAgICAgICB0aGlzLmJldExpbWl0cyA9IHsgcGxheWVyOiA1MDAsIGJhbmtlcjogNTAwLCB0aWU6IDI1MCB9O1xyXG4gICAgICAgIHRoaXMuYmV0TWluaW11bSA9IDEwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEJldHMgPSB7IHBsYXllcjogMCwgYmFua2VyOiAwLCB0aWU6IDAgfTtcclxuICAgICAgICB0aGlzLnRvdGFsQmV0ID0gMDtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLm1haW5VcGRhdGUoeyB0eXBlOiAnR0VUX0JBTEFOQ0UnIH0pO1xyXG4gICAgICAgIHZhciBnYW1lU2hlZXQgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbXCJhc3NldHMvR2FtZUFzc2V0cy5qc29uXCJdO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLnRpZV9idXR0b24gPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMudGllX2J1dHRvbi5iZWdpbkZpbGwoMHhmZjAwMDApO1xyXG4gICAgICAgIHRoaXMudGllX2J1dHRvbi5kcmF3Q2lyY2xlKDQyLCA0MiwgNDIpO1xyXG4gICAgICAgIHRoaXMudGllX2J1dHRvbi5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy50aWVfYnV0dG9uLmFscGhhID0gMC4wMTtcclxuICAgICAgICB0aGlzLnRpZV9idXR0b24uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGllX2J1dHRvbi5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpZV9idXR0b24ub24oJ3BvaW50ZXJkb3duJywgdGhpcy5iZXRPblRpZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50aWVfYnV0dG9uLnBvc2l0aW9uLnNldCg0MTIsIDE2MCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfYnV0dG9uID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLnBsYXllcl9idXR0b24uYmVnaW5GaWxsKDB4ZmYwMDAwKTtcclxuICAgICAgICB0aGlzLnBsYXllcl9idXR0b24uZHJhd0NpcmNsZSg0MiwgNDIsIDQyKTtcclxuICAgICAgICB0aGlzLnBsYXllcl9idXR0b24uZW5kRmlsbCgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2J1dHRvbi5hbHBoYSA9IDAuMDE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfYnV0dG9uLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXllcl9idXR0b24uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfYnV0dG9uLm9uKCdwb2ludGVyZG93bicsIHRoaXMuYmV0T25QbGF5ZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyX2J1dHRvbi5wb3NpdGlvbi5zZXQoMzIwLCAzMTYpO1xyXG4gICAgICAgIHRoaXMuYmFua2VyX2J1dHRvbiA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJfYnV0dG9uLmJlZ2luRmlsbCgweGZmMDAwMCk7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJfYnV0dG9uLmRyYXdDaXJjbGUoNDIsIDQyLCA0Mik7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJfYnV0dG9uLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLmJhbmtlcl9idXR0b24uYWxwaGEgPSAwLjAxO1xyXG4gICAgICAgIHRoaXMuYmFua2VyX2J1dHRvbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJfYnV0dG9uLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmFua2VyX2J1dHRvbi5vbigncG9pbnRlcmRvd24nLCB0aGlzLmJldE9uQmFua2VyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJhbmtlcl9idXR0b24ucG9zaXRpb24uc2V0KDUwNiwgMzE2KTtcclxuICAgICAgICB2YXIgdGFibGVCZXRTdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICBmaWxsOiBbJyNmZmZmZmYnLCAnIzAwZmY5OSddLFxyXG4gICAgICAgICAgICBzdHJva2U6ICcjNGExODUwJyxcclxuICAgICAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93OiB0cnVlLFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93Q29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgZHJvcFNoYWRvd0JsdXI6IDQsXHJcbiAgICAgICAgICAgIGRyb3BTaGFkb3dBbmdsZTogTWF0aC5QSSAvIDYsXHJcbiAgICAgICAgICAgIGRyb3BTaGFkb3dEaXN0YW5jZTogNixcclxuICAgICAgICAgICAgd29yZFdyYXA6IHRydWUsXHJcbiAgICAgICAgICAgIHdvcmRXcmFwV2lkdGg6IDQ0MCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdHh0U3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgZmlsbDogWycjZmZmZmZmJywgJyMwMGZmOTknXSxcclxuICAgICAgICAgICAgc3Ryb2tlOiAnIzRhMTg1MCcsXHJcbiAgICAgICAgICAgIHN0cm9rZVRoaWNrbmVzczogMixcclxuICAgICAgICAgICAgZHJvcFNoYWRvdzogdHJ1ZSxcclxuICAgICAgICAgICAgZHJvcFNoYWRvd0NvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIGRyb3BTaGFkb3dCbHVyOiA0LFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93QW5nbGU6IE1hdGguUEkgLyA2LFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93RGlzdGFuY2U6IDYsXHJcbiAgICAgICAgICAgIHdvcmRXcmFwOiB0cnVlLFxyXG4gICAgICAgICAgICB3b3JkV3JhcFdpZHRoOiA0NDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50aWVWYWx1ZV90eHQgPSBuZXcgUElYSS5UZXh0KCcwJywgdGFibGVCZXRTdHlsZSk7XHJcbiAgICAgICAgdGhpcy50aWVWYWx1ZV90eHQucG9zaXRpb24uc2V0KDQ1NCwgMjA0KTtcclxuICAgICAgICB0aGlzLnRpZVZhbHVlX3R4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJWYWx1ZV90eHQgPSBuZXcgUElYSS5UZXh0KCcwJywgdGFibGVCZXRTdHlsZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJWYWx1ZV90eHQucG9zaXRpb24uc2V0KDM2MiwgMzU4KTtcclxuICAgICAgICB0aGlzLnBsYXllclZhbHVlX3R4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJWYWx1ZV90eHQgPSBuZXcgUElYSS5UZXh0KCcwJywgdGFibGVCZXRTdHlsZSk7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJWYWx1ZV90eHQucG9zaXRpb24uc2V0KDU0OCwgMzU4KTtcclxuICAgICAgICB0aGlzLmJhbmtlclZhbHVlX3R4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlTGFiZWxfdHh0ID0gbmV3IFBJWEkuVGV4dCgnQkFMQU5DRSA6JywgdHh0U3R5bGUpO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZUxhYmVsX3R4dC5wb3NpdGlvbi5zZXQoNSwgNTUwKTtcclxuICAgICAgICB0aGlzLmJhbGFuY2VWYWx1ZV90eHQgPSBuZXcgUElYSS5UZXh0KHRoaXMuYmFsYW5jZS50b0ZpeGVkKDIpLCB0eHRTdHlsZSk7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVmFsdWVfdHh0LnBvc2l0aW9uLnNldCg5MCwgNTUwKTtcclxuICAgICAgICB0aGlzLnRvdGFsQmV0TGFiZWxfdHh0ID0gbmV3IFBJWEkuVGV4dCgnVE9UQUwgQkVUIDonLCB0eHRTdHlsZSk7XHJcbiAgICAgICAgdGhpcy50b3RhbEJldExhYmVsX3R4dC5wb3NpdGlvbi5zZXQoNzM2LCA1NTApO1xyXG4gICAgICAgIHRoaXMudG90YWxCZXRWYWx1ZV90eHQgPSBuZXcgUElYSS5UZXh0KHRoaXMudG90YWxCZXQudG9GaXhlZCgyKSwgdHh0U3R5bGUpO1xyXG4gICAgICAgIHRoaXMudG90YWxCZXRWYWx1ZV90eHQucG9zaXRpb24uc2V0KDgzMCwgNTUwKTtcclxuICAgICAgICB0aGlzLmJldExpbWl0c0xhYmVsX3R4dCA9IG5ldyBQSVhJLlRleHQoJ1BsYXllciAvIEJhbmtlciA6IE1pbiA6ICcgKyB0aGlzLmJldE1pbmltdW0gKyAnICAtICBNYXggOiAnICsgdGhpcy5iZXRMaW1pdHMucGxheWVyICsgJyAgICBUaWUgOiBNaW4gOiAnICsgdGhpcy5iZXRNaW5pbXVtICsgJyAgLSAgTWF4IDogJyArIHRoaXMuYmV0TGltaXRzLnRpZSwgdHh0U3R5bGUpO1xyXG4gICAgICAgIHRoaXMuYmV0TGltaXRzTGFiZWxfdHh0LnBvc2l0aW9uLnNldCg1LCA1NzYpO1xyXG4gICAgICAgIHRoaXMuYmV0TGltaXRzTGFiZWxfdHh0LmFuY2hvci5zZXQoMCk7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRMYWJlbF90eHQgPSBuZXcgUElYSS5UZXh0KCcnLCB0eHRTdHlsZSk7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRMYWJlbF90eHQucG9zaXRpb24uc2V0KDg5NSwgNTc2KTtcclxuICAgICAgICB0aGlzLnJlc3VsdExhYmVsX3R4dC5hbmNob3Iuc2V0KDEsIDApO1xyXG4gICAgICAgIHRoaXMucGxheWVyV2luSGlnaGxpZ2h0ID0gbmV3IFBJWEkuU3ByaXRlKGdhbWVTaGVldC50ZXh0dXJlc1tcInBsYXllcl93aW5faGlnaGxpZ2h0LnBuZ1wiXSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJXaW5IaWdobGlnaHQucG9zaXRpb24uc2V0KDI4NiwgMzg4KTtcclxuICAgICAgICB0aGlzLnBsYXllcldpbkhpZ2hsaWdodC5hbHBoYSA9IDAuNTtcclxuICAgICAgICB0aGlzLmJhbmtlcldpbkhpZ2hsaWdodCA9IG5ldyBQSVhJLlNwcml0ZShnYW1lU2hlZXQudGV4dHVyZXNbXCJiYW5rZXJfd2luX2hpZ2hsaWdodC5wbmdcIl0pO1xyXG4gICAgICAgIHRoaXMuYmFua2VyV2luSGlnaGxpZ2h0LnBvc2l0aW9uLnNldCg0NzIsIDM4OCk7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJXaW5IaWdobGlnaHQuYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgdGhpcy50aWVXaW5IaWdobGlnaHQgPSBuZXcgUElYSS5TcHJpdGUoZ2FtZVNoZWV0LnRleHR1cmVzW1widGllX3dpbl9oaWdobGlnaHQucG5nXCJdKTtcclxuICAgICAgICB0aGlzLnRpZVdpbkhpZ2hsaWdodC5wb3NpdGlvbi5zZXQoNDA4LCAyMzQpO1xyXG4gICAgICAgIHRoaXMudGllV2luSGlnaGxpZ2h0LmFscGhhID0gMC41O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMudGllX2J1dHRvbiwgdGhpcy5wbGF5ZXJfYnV0dG9uLCB0aGlzLmJhbmtlcl9idXR0b24pO1xyXG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy50aWVWYWx1ZV90eHQsdGhpcy5wbGF5ZXJWYWx1ZV90eHQsdGhpcy5iYW5rZXJWYWx1ZV90eHQpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuYmFsYW5jZUxhYmVsX3R4dCwgdGhpcy5iYWxhbmNlVmFsdWVfdHh0LCB0aGlzLmJldExpbWl0c0xhYmVsX3R4dCk7XHJcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBsYXllcldpbkhpZ2hsaWdodCx0aGlzLmJhbmtlcldpbkhpZ2hsaWdodCx0aGlzLnRpZVdpbkhpZ2hsaWdodCk7XHJcbiAgICB9XHJcbiAgICBUYWJsZS5wcm90b3R5cGUuYmV0T25UaWUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsQmV0ICsgdGhpcy5jaGlwVmFsdWUgPiB0aGlzLmJhbGFuY2UpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ05PVCBFTk9VR0ggQkFMQU5DRScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCZXRzLnRpZSArIHRoaXMuY2hpcFZhbHVlIDwgdGhpcy5iZXRMaW1pdHMudGllKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHMudGllICs9IHRoaXMuY2hpcFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0cy50aWUgPSB0aGlzLmJldExpbWl0cy50aWU7XHJcbiAgICAgICAgICAgIHRoaXMudGllX2J1dHRvbi5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnRpZVZhbHVlX3R4dCk7XHJcbiAgICAgICAgdGhpcy50aWVWYWx1ZV90eHQudGV4dCA9IHRoaXMuY3VycmVudEJldHMudGllLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoeyB0eXBlOiAnVVBEQVRFX1ZBTFVFUycgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFibGUucHJvdG90eXBlLmJldE9uUGxheWVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAodGhpcy50b3RhbEJldCArIHRoaXMuY2hpcFZhbHVlID4gdGhpcy5iYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdOT1QgRU5PVUdIIEJBTEFOQ0UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0cy5wbGF5ZXIgKyB0aGlzLmNoaXBWYWx1ZSA8IHRoaXMuYmV0TGltaXRzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXRzLnBsYXllciArPSB0aGlzLmNoaXBWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHMucGxheWVyID0gdGhpcy5iZXRMaW1pdHMucGxheWVyO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl9idXR0b24uaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5wbGF5ZXJWYWx1ZV90eHQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyVmFsdWVfdHh0LnRleHQgPSB0aGlzLmN1cnJlbnRCZXRzLnBsYXllci50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHsgdHlwZTogJ1VQREFURV9WQUxVRVMnIH0pO1xyXG4gICAgfTtcclxuICAgIFRhYmxlLnByb3RvdHlwZS5iZXRPbkJhbmtlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxCZXQgKyB0aGlzLmNoaXBWYWx1ZSA+IHRoaXMuYmFsYW5jZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnTk9UIEVOT1VHSCBCQUxBTkNFJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldHMuYmFua2VyICsgdGhpcy5jaGlwVmFsdWUgPCB0aGlzLmJldExpbWl0cy5iYW5rZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0cy5iYW5rZXIgKz0gdGhpcy5jaGlwVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXRzLmJhbmtlciA9IHRoaXMuYmV0TGltaXRzLmJhbmtlcjtcclxuICAgICAgICAgICAgdGhpcy5iYW5rZXJfYnV0dG9uLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuYmFua2VyVmFsdWVfdHh0KTtcclxuICAgICAgICB0aGlzLmJhbmtlclZhbHVlX3R4dC50ZXh0ID0gdGhpcy5jdXJyZW50QmV0cy5iYW5rZXIudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7IHR5cGU6ICdVUERBVEVfVkFMVUVTJyB9KTtcclxuICAgIH07XHJcbiAgICBUYWJsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKF9wYXJhbXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHN3aXRjaCAoX3BhcmFtcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NISVBfU0VMRUNURUQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwVmFsdWUgPSBfcGFyYW1zLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1VQREFURV9WQUxVRVMnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG90YWxCZXQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2hvdyBjb250cm9sc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblVwZGF0ZSh7IHR5cGU6ICdTSE9XX0NPTlRST0xTX0JFVCcsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMudG90YWxCZXRMYWJlbF90eHQsIHRoaXMudG90YWxCZXRWYWx1ZV90eHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEJldCA9IHRoaXMuY3VycmVudEJldHMucGxheWVyICsgdGhpcy5jdXJyZW50QmV0cy5iYW5rZXIgKyB0aGlzLmN1cnJlbnRCZXRzLnRpZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxCZXRWYWx1ZV90eHQudGV4dCA9IHRoaXMudG90YWxCZXQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZUFmdGVyQmV0ID0gdGhpcy5iYWxhbmNlIC0gdGhpcy50b3RhbEJldDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZVZhbHVlX3R4dC50ZXh0ID0gdGhpcy5iYWxhbmNlQWZ0ZXJCZXQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDTEVBUl9BTEwnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy50b3RhbEJldFZhbHVlX3R4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnRvdGFsQmV0TGFiZWxfdHh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0TGFiZWxfdHh0LnRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxCZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0cy5wbGF5ZXIgPSB0aGlzLmN1cnJlbnRCZXRzLmJhbmtlciA9IHRoaXMuY3VycmVudEJldHMudGllID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxCZXRWYWx1ZV90eHQudGV4dCA9IHRoaXMudG90YWxCZXQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZUFmdGVyQmV0ID0gdGhpcy5iYWxhbmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlVmFsdWVfdHh0LnRleHQgPSB0aGlzLmJhbGFuY2UudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyVmFsdWVfdHh0LnRleHQgPSB0aGlzLmN1cnJlbnRCZXRzLnBsYXllci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJWYWx1ZV90eHQudGV4dCA9IHRoaXMuY3VycmVudEJldHMuYmFua2VyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpZVZhbHVlX3R4dC50ZXh0ID0gdGhpcy5jdXJyZW50QmV0cy50aWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucGxheWVyVmFsdWVfdHh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmFua2VyVmFsdWVfdHh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMudGllVmFsdWVfdHh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyX2J1dHRvbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbmtlcl9idXR0b24uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWVfYnV0dG9uLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdFUkFTRSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IHR5cGU6ICdDTEVBUl9BTEwnIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RFQUwnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfYnV0dG9uLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbmtlcl9idXR0b24uaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGllX2J1dHRvbi5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVF9CRVRfREFUQSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50QmV0cztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdTSE9XX1JFU1VMVCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBfcGFyYW1zLmRhdGEuYmFsYW5jZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZVZhbHVlX3R4dC50ZXh0ID0gdGhpcy5iYWxhbmNlLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQmV0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jdXJyZW50QmV0cykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRMYWJlbF90eHQudGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfcGFyYW1zLmRhdGEuV2luUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyV2luSGlnaGxpZ2h0LmFscGhhID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5wbGF5ZXJXaW5IaWdobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuQW5pbSA9IFR3ZWVuTWF4LnRvKHRoaXMucGxheWVyV2luSGlnaGxpZ2h0LCAwLjIsIHsgYWxwaGE6IDAuMywgZWFzZTogZ3NhcC5MaW5lYXIuZWFzZU5vbmUsIG9uQ29tcGxldGVTY29wZTogdGhpcyB9KS5yZXBlYXQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3BhcmFtcy5kYXRhLnBheW91dC5wbGF5ZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdExhYmVsX3R4dC50ZXh0ID0gJ1RPVEFMIFdJTlM6ICcgKyBfcGFyYW1zLmRhdGEucGF5b3V0LnBsYXllci50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmFua2VyVmFsdWVfdHh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy50aWVWYWx1ZV90eHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdCJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5rZXJXaW5IaWdobGlnaHQuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmJhbmtlcldpbkhpZ2hsaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5BbmltID0gVHdlZW5NYXgudG8odGhpcy5iYW5rZXJXaW5IaWdobGlnaHQsIDAuMiwgeyBhbHBoYTogMC4zLCBlYXNlOiBnc2FwLkxpbmVhci5lYXNlTm9uZSwgb25Db21wbGV0ZVNjb3BlOiB0aGlzIH0pLnJlcGVhdCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcGFyYW1zLmRhdGEucGF5b3V0LmJhbmtlciA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0TGFiZWxfdHh0LnRleHQgPSAnVE9UQUwgV0lOUzogJyArIF9wYXJhbXMuZGF0YS5wYXlvdXQuYmFua2VyLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5wbGF5ZXJWYWx1ZV90eHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnRpZVZhbHVlX3R4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpZVdpbkhpZ2hsaWdodC5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMudGllV2luSGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50d2VlbkFuaW0gPSBUd2Vlbk1heC50byh0aGlzLnRpZVdpbkhpZ2hsaWdodCwgMC4yLCB7IGFscGhhOiAwLjMsIGVhc2U6IGdzYXAuTGluZWFyLmVhc2VOb25lLCBvbkNvbXBsZXRlU2NvcGU6IHRoaXMgfSkucmVwZWF0KC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXJhbXMuZGF0YS5wYXlvdXQudGllID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRMYWJlbF90eHQudGV4dCA9ICdUT1RBTCBXSU5TOiAnICsgX3BhcmFtcy5kYXRhLnBheW91dC50aWUudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnBsYXllclZhbHVlX3R4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmFua2VyVmFsdWVfdHh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXN1bHRMYWJlbF90eHQudGV4dCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMucmVzdWx0TGFiZWxfdHh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9wYXJhbXMuZGF0YS5hbGxvd1JlYmV0ID0gKF90aGlzLnByZXZpb3VzQmV0cy5wbGF5ZXIgKyBfdGhpcy5wcmV2aW91c0JldHMuYmFua2VyICsgX3RoaXMucHJldmlvdXNCZXRzLnRpZSkgPD0gX3RoaXMuYmFsYW5jZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYWluVXBkYXRlKHsgdHlwZTogJ1NIT1dfU1VNTUFSWScsIGRhdGE6IF9wYXJhbXMuZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JFU0VUJzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKHsgdHlwZTogJ0NMRUFSX0FMTCcgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuQW5pbS5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnBsYXllcldpbkhpZ2hsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmJhbmtlcldpbkhpZ2hsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnRpZVdpbkhpZ2hsaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUkVCRVQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoeyB0eXBlOiAnUkVTRVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0cy5wbGF5ZXIgPSB0aGlzLnByZXZpb3VzQmV0cy5wbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0cy5wbGF5ZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldHMucGxheWVyID49IHRoaXMuYmV0TGltaXRzLnBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl9idXR0b24uaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5wbGF5ZXJWYWx1ZV90eHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyVmFsdWVfdHh0LnRleHQgPSB0aGlzLmN1cnJlbnRCZXRzLnBsYXllci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0cy5iYW5rZXIgPSB0aGlzLnByZXZpb3VzQmV0cy5iYW5rZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0cy5iYW5rZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldHMuYmFua2VyID49IHRoaXMuYmV0TGltaXRzLmJhbmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlcl9idXR0b24uaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5iYW5rZXJWYWx1ZV90eHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua2VyVmFsdWVfdHh0LnRleHQgPSB0aGlzLmN1cnJlbnRCZXRzLmJhbmtlci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0cy50aWUgPSB0aGlzLnByZXZpb3VzQmV0cy50aWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0cy50aWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldHMudGllID49IHRoaXMuYmV0TGltaXRzLnRpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpZV9idXR0b24uaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy50aWVWYWx1ZV90eHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGllVmFsdWVfdHh0LnRleHQgPSB0aGlzLmN1cnJlbnRCZXRzLnRpZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoeyB0eXBlOiAnVVBEQVRFX1ZBTFVFUycgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhYmxlO1xyXG59KCkpO1xyXG5leHBvcnRzLlRhYmxlID0gVGFibGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQSVhJID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnZhciBnc2FwID0gcmVxdWlyZShcImdzYXBcIik7XHJcbnZhciBUd2Vlbk1heCA9IGdzYXAuVHdlZW5NYXg7XHJcbnZhciBUYWJsZV8xID0gcmVxdWlyZShcIi4vVGFibGVcIik7XHJcbnZhciBDaGlwc18xID0gcmVxdWlyZShcIi4vQ2hpcHNcIik7XHJcbnZhciBDb250cm9sc18xID0gcmVxdWlyZShcIi4vQ29udHJvbHNcIik7XHJcbnZhciBEZWFsZXJfMSA9IHJlcXVpcmUoXCIuL0RlYWxlclwiKTtcclxudmFyIENhcmRzXzEgPSByZXF1aXJlKFwiLi9DYXJkc1wiKTtcclxudmFyIFN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuL1N1bW1hcnlcIik7XHJcbnZhciB3aWR0aCA9IDkwMDtcclxudmFyIGhlaWdodCA9IDYwMDtcclxudmFyIGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgYW50aWFsaWFzOiB0cnVlLFxyXG59KTtcclxudmFyIGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwX2NvbnRhaW5lclwiKTtcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcC52aWV3KTtcclxudmFyIHRhYmxlO1xyXG52YXIgY2hpcHM7XHJcbnZhciBjb250cm9scztcclxudmFyIGRlYWxlcjtcclxudmFyIGNhcmRzO1xyXG52YXIgc3VtbWFyeTtcclxuZnVuY3Rpb24gbG9hZEFzc2V0cygpIHtcclxuICAgIFBJWEkubG9hZGVyXHJcbiAgICAgICAgLmFkZChcImFzc2V0cy9iYWNrZ3JvdWQuanBnXCIpXHJcbiAgICAgICAgLmFkZChcImFzc2V0cy9HYW1lQXNzZXRzLmpzb25cIilcclxuICAgICAgICAuYWRkKFwiYXNzZXRzL0NhcmRBc3NldHMuanNvblwiKVxyXG4gICAgICAgIC5sb2FkKHJ1bik7XHJcbn1cclxuZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgLy9iYWNrZ3JvdW5kXHJcbiAgICB2YXIgdGV4dHVyZV9iZyA9IFBJWEkubG9hZGVyLnJlc291cmNlc1tcImFzc2V0cy9iYWNrZ3JvdWQuanBnXCJdLnRleHR1cmU7XHJcbiAgICB0ZXh0dXJlX2JnLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVDtcclxuICAgIHZhciBzcHJpdGVfYmcgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZV9iZyk7XHJcbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlX2JnKTtcclxuICAgIC8vZW5kIGJhY2tncm91bmRcclxuICAgIGRlYWxlciA9IG5ldyBEZWFsZXJfMS5EZWFsZXIodXBkYXRlKTtcclxuICAgIHRhYmxlID0gbmV3IFRhYmxlXzEuVGFibGUodXBkYXRlLCBhcHApO1xyXG4gICAgY2hpcHMgPSBuZXcgQ2hpcHNfMS5DaGlwcyh1cGRhdGUsIGFwcCk7XHJcbiAgICBjb250cm9scyA9IG5ldyBDb250cm9sc18xLkNvbnRyb2xzKHVwZGF0ZSwgYXBwKTtcclxuICAgIGNhcmRzID0gbmV3IENhcmRzXzEuQ2FyZHModXBkYXRlLCBhcHApO1xyXG4gICAgc3VtbWFyeSA9IG5ldyBTdW1tYXJ5XzEuU3VtbWFyeSh1cGRhdGUsIGFwcCk7XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlKF9wYXJhbXMpIHtcclxuICAgIHN3aXRjaCAoX3BhcmFtcy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUX0JBTEFOQ0UnOlxyXG4gICAgICAgICAgICByZXR1cm4gZGVhbGVyLnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQ0hJUF9TRUxFQ1RFRCc6XHJcbiAgICAgICAgICAgIHRhYmxlLnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnR0VUX0NISVBfVkFMVUUnOlxyXG4gICAgICAgICAgICByZXR1cm4gY2hpcHMuc2VsZWN0ZWRDaGlwVmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1NIT1dfQ09OVFJPTFNfQkVUJzpcclxuICAgICAgICBjYXNlICdISURFX0NPTlRST0xTJzpcclxuICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKF9wYXJhbXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdFUkFTRSc6XHJcbiAgICAgICAgICAgIHRhYmxlLnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnREVBTCc6XHJcbiAgICAgICAgICAgIHRhYmxlLnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgX3BhcmFtcy5iZXREYXRhID0gdGFibGUudXBkYXRlKHsgdHlwZTogJ0dFVF9CRVRfREFUQScgfSk7XHJcbiAgICAgICAgICAgIGRlYWxlci51cGRhdGUoX3BhcmFtcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0RFQUxfUkVTVUxUJzpcclxuICAgICAgICAgICAgY2FyZHMudXBkYXRlKF9wYXJhbXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdTSE9XX1JFU1VMVCc6XHJcbiAgICAgICAgICAgIHRhYmxlLnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnU0hPV19TVU1NQVJZJzpcclxuICAgICAgICAgICAgc3VtbWFyeS51cGRhdGUoX3BhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUkVTRVQnOlxyXG4gICAgICAgICAgICBzdW1tYXJ5LnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgdGFibGUudXBkYXRlKF9wYXJhbXMpO1xyXG4gICAgICAgICAgICBjYXJkcy51cGRhdGUoX3BhcmFtcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1JFQkVUJzpcclxuICAgICAgICAgICAgc3VtbWFyeS51cGRhdGUoX3BhcmFtcyk7XHJcbiAgICAgICAgICAgIHRhYmxlLnVwZGF0ZShfcGFyYW1zKTtcclxuICAgICAgICAgICAgY2FyZHMudXBkYXRlKF9wYXJhbXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5sb2FkQXNzZXRzKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=