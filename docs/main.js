(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n    <app-header></app-header>\r\n    <div style=\"min-height: 700px;\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page {\n  padding-top: 30px;\n  min-height: 820px;\n  background: rgba(50, 140, 193, 0.7); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNvdXJjZVxcTWl4ZWQtQmFnZ2xlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLG9DQUFpQyxFQUNwQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogODIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLDE0MCwxOTMsIDAuNyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _die_die_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./die/die.component */ "./src/app/die/die.component.ts");
/* harmony import */ var _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-board/game-board.component */ "./src/app/game-board/game-board.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _dice_dice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dice/dice.service */ "./src/app/dice/dice.service.ts");
/* harmony import */ var _dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dictionary/dictionary.service */ "./src/app/dictionary/dictionary.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_8__["GameBoardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                _die_die_component__WEBPACK_IMPORTED_MODULE_7__["DieComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [
                _dice_dice_service__WEBPACK_IMPORTED_MODULE_13__["DiceService"],
                _dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_14__["DictionaryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dice/dice.json":
/*!********************************!*\
  !*** ./src/app/dice/dice.json ***!
  \********************************/
/*! exports provided: dice-collection, default */
/***/ (function(module) {

module.exports = {"dice-collection":[{"name":"Super Big - Official","height":6,"width":6,"dice":[["s","o","r","p","h","t"],["d","d","o","n","t","h"],["e","n","n","n","d","a"],["e","o","n","u","i","a"],["o","n","d","l","r","h"],["e","t","i","l","i","s"],["a","a","e","o","o","e"],["o","u","o","t","n","w"],["n","e","m","n","a","g"],["x","b","k","j","b","z"],["i","e","s","p","t","l"],["o","t","t","t","m","e"],["e","t","i","t","c","i"],["s","s","s","n","u","e"],["f","s","a","r","a","a"],["i","t","c","s","p","e"],["■","■","e","i","■","o"],["h","w","h","n","d","o"],["i","r","l","s","e","h"],["b","a","d","i","e","o"],["z","k","j","qu","w","x"],["c","c","e","n","s","t"],["m","e","a","e","e","e"],["g","e","e","u","m","a"],["y","n","c","g","f","u"],["in","an","he","er","th","qu"],["t","o","u","t","o","o"],["r","t","i","s","h","v"],["n","l","m","e","a","i"],["c","n","d","n","d","l"],["a","i","a","f","s","r"],["i","y","a","f","r","s"],["o","r","d","h","l","h"],["g","v","r","r","w","o"],["e","a","e","a","e","e"],["y","s","y","r","i","p"]]}]};

/***/ }),

/***/ "./src/app/dice/dice.service.ts":
/*!**************************************!*\
  !*** ./src/app/dice/dice.service.ts ***!
  \**************************************/
/*! exports provided: DiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceService", function() { return DiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _diceCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diceCollection */ "./src/app/dice/diceCollection.ts");
/* harmony import */ var _dice_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dice.json */ "./src/app/dice/dice.json");
var _dice_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dice.json */ "./src/app/dice/dice.json", 1);




var DiceService = /** @class */ (function () {
    function DiceService() {
        var _this = this;
        this.collections = [];
        _dice_json__WEBPACK_IMPORTED_MODULE_3__["dice-collection"].forEach(function (x) {
            return _this.collections.push(new _diceCollection__WEBPACK_IMPORTED_MODULE_2__["DiceCollection"](x.name, x.dice, x.height, x.width));
        });
    }
    DiceService.prototype.getAllCollections = function () {
        return this.collections;
    };
    DiceService.prototype.getAllDiceNames = function () {
        return this.collections.map(function (c) { return c.name; });
    };
    DiceService.prototype.getDiceByName = function (name) {
        return this.collections.find(function (c) { return c.name === name; });
    };
    DiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiceService);
    return DiceService;
}());



/***/ }),

/***/ "./src/app/dice/diceCollection.ts":
/*!****************************************!*\
  !*** ./src/app/dice/diceCollection.ts ***!
  \****************************************/
/*! exports provided: DiceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceCollection", function() { return DiceCollection; });
/* harmony import */ var _die_die__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../die/die */ "./src/app/die/die.ts");

var DiceCollection = /** @class */ (function () {
    function DiceCollection(name, dice, height, width) {
        var _this = this;
        this.name = name;
        this.height = height;
        this.width = width;
        this.dice = [];
        dice.forEach(function (x) { return _this.dice.push(new _die_die__WEBPACK_IMPORTED_MODULE_0__["Die"](x)); });
    }
    return DiceCollection;
}());



/***/ }),

/***/ "./src/app/dictionary/dictionary.json":
/*!********************************************!*\
  !*** ./src/app/dictionary/dictionary.json ***!
  \********************************************/
/*! exports provided: dictionary-collection, default */
/***/ (function(module) {


/***/ }),

/***/ "./src/app/dictionary/dictionary.service.ts":
/*!**************************************************!*\
  !*** ./src/app/dictionary/dictionary.service.ts ***!
  \**************************************************/
/*! exports provided: DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryService", function() { return DictionaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dictionary_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary.json */ "./src/app/dictionary/dictionary.json");
var _dictionary_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dictionary.json */ "./src/app/dictionary/dictionary.json", 1);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dictionary */ "./src/app/dictionary/dictionary.ts");




var DictionaryService = /** @class */ (function () {
    function DictionaryService() {
        var _this = this;
        this.collections = [];
        _dictionary_json__WEBPACK_IMPORTED_MODULE_2__["dictionary-collection"].forEach(function (x) { return _this.collections.push(new _dictionary__WEBPACK_IMPORTED_MODULE_3__["Dictionary"](x.name, x.words)); });
    }
    DictionaryService.prototype.getAllCollections = function () {
        return this.collections;
    };
    DictionaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DictionaryService);
    return DictionaryService;
}());



/***/ }),

/***/ "./src/app/dictionary/dictionary.ts":
/*!******************************************!*\
  !*** ./src/app/dictionary/dictionary.ts ***!
  \******************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
var Dictionary = /** @class */ (function () {
    function Dictionary(name, wordList) {
        this.name = name;
        this.wordList = wordList;
    }
    Dictionary.prototype.trimWordsContainingLetters = function (letters) {
        var filterWordList = this.wordList.slice();
        var _loop_1 = function (x) {
            filterWordList = filterWordList.filter(function (word) { return word.toUpperCase().indexOf(letters[x].toUpperCase()) === -1; });
        };
        for (var x = 0; x < letters.length; x++) {
            _loop_1(x);
        }
        return filterWordList;
    };
    return Dictionary;
}());



/***/ }),

/***/ "./src/app/die/die.component.html":
/*!****************************************!*\
  !*** ./src/app/die/die.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=letter [ngClass]=\"{'selected': die.selected && !showHeatMap}\" [style.background]=\"colorDie(heatMap)\" [title]=\"helpString\">{{die.showing}}</div>"

/***/ }),

/***/ "./src/app/die/die.component.scss":
/*!****************************************!*\
  !*** ./src/app/die/die.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letter {\n  font-family: Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  width: 27px;\n  height: 24px;\n  font-weight: 700;\n  border: gray 1px solid;\n  border-radius: 6px;\n  text-align: center;\n  padding-top: 3px;\n  margin: 1px;\n  background: #fffeef;\n  box-sizing: content-box; }\n\n.selected {\n  background: gold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGllL0Q6XFxTb3VyY2VcXE1peGVkLUJhZ2dsZS9zcmNcXGFwcFxcZGllXFxkaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywwQ0FBeUM7RUFDekMsMkJBQTBCO0VBQ3ZCLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNuQixZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLHdCQUF1QixFQUN2Qjs7QUFFRDtFQUNDLGlCQUFnQixFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RpZS9kaWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV0dGVye1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyOiBncmF5IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZmVlZjtcclxuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuXHRiYWNrZ3JvdW5kOiBnb2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/die/die.component.ts":
/*!**************************************!*\
  !*** ./src/app/die/die.component.ts ***!
  \**************************************/
/*! exports provided: DieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieComponent", function() { return DieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./die */ "./src/app/die/die.ts");
/* harmony import */ var _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../heatMap/heatMapEnum */ "./src/app/heatMap/heatMapEnum.ts");




var DieComponent = /** @class */ (function () {
    function DieComponent() {
    }
    /**
     * colorDie
     * heatMapEnum: HeatMapEnum	 */
    DieComponent.prototype.colorDie = function (heatMapEnum) {
        var red = 255;
        var green = 255;
        var blue = 255;
        var wordCount = 0;
        switch (heatMapEnum) {
            case _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__["HeatMapEnum"].Start:
                wordCount = this.die.heatMap.start;
                this.showHeatMap = true;
                break;
            case _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__["HeatMapEnum"].Middle:
                wordCount = this.die.heatMap.middle;
                this.showHeatMap = true;
                break;
            case _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__["HeatMapEnum"].End:
                wordCount = this.die.heatMap.end;
                this.showHeatMap = true;
                break;
            default:
            case _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__["HeatMapEnum"].None:
                this.showHeatMap = false;
                break;
        }
        var subtraction = wordCount * 2;
        blue -= subtraction > 255 ? 255 : subtraction;
        green -= subtraction > 255 ? subtraction - 255 : 0;
        this.helpString = this.showHeatMap ? this.die.heatMap.toString() : "";
        return "rgb(" + red + "," + green + "," + blue + ")";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _die__WEBPACK_IMPORTED_MODULE_2__["Die"])
    ], DieComponent.prototype, "die", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DieComponent.prototype, "heatMap", void 0);
    DieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'die',
            template: __webpack_require__(/*! ./die.component.html */ "./src/app/die/die.component.html"),
            styles: [__webpack_require__(/*! ./die.component.scss */ "./src/app/die/die.component.scss")]
        })
    ], DieComponent);
    return DieComponent;
}());



/***/ }),

/***/ "./src/app/die/die.ts":
/*!****************************!*\
  !*** ./src/app/die/die.ts ***!
  \****************************/
/*! exports provided: Die */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Die", function() { return Die; });
/* harmony import */ var _heatMap_heatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heatMap/heatMap */ "./src/app/heatMap/heatMap.ts");

var Die = /** @class */ (function () {
    function Die(sides) {
        this.sides = sides;
        this.heatMap = new _heatMap_heatMap__WEBPACK_IMPORTED_MODULE_0__["HeatMap"]();
    }
    return Die;
}());



/***/ }),

/***/ "./src/app/game-board/game-board.component.html":
/*!******************************************************!*\
  !*** ./src/app/game-board/game-board.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"zoomer\" *ngIf=\"boardLoaded\">\r\n\t<label>Board Zoom</label>\r\n\t<input type=\"range\" step=\"0.05\" min=\"1\" max=\"10\" [(ngModel)]=\"zoomTick\" class=\"slider\" id=\"myRange\">\r\n</div>\r\n<div class=\"board\" [style.zoom]=\"zoomTick\">\r\n\t<div *ngFor=\"let row of dice\" class=\"board-row\">\r\n\t\t<div *ngFor=\"let die of row\" class=\"board-col\">\r\n\t\t\t<die [die]=\"die\" [heatMap]=\"heatMap\"></die>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"rotate-buttons\" *ngIf=\"boardLoaded\">\r\n\t<button class=\"clockwise btn\" (click)=\"rotateCc()\" title=\"Rotate Clockwise\">\r\n\t\t<fa-icon [icon]=\"faUndo\" transform=\"flip-h\"></fa-icon>\r\n\t</button>\r\n\t<button class=\"clockwise btn\" (click)=\"flip()\" title=\"Flip\">\r\n\t\t<fa-icon [icon]=\"faExchangeAlt\"></fa-icon>\r\n\t</button>\r\n\t<button class=\"anti-clockwise btn\" (click)=\"rotateCcw()\" title=\"Rotate Counterclockwise\">\r\n\t\t<fa-icon [icon]=\"faUndo\" class=\"fa-flip-horizontal\"></fa-icon>\r\n\t</button>\r\n</div>\r\n<div class=\"heatmap-radio\">\r\n\t<input type=\"radio\" [value]=\"HeatMapEnum.None\" [(ngModel)]=\"heatMap\" class=\"heatmapRadio\"> None\r\n\t<input type=\"radio\" [value]=\"HeatMapEnum.Start\" [(ngModel)]=\"heatMap\" class=\"heatmapRadio\"> Start\r\n\t<input type=\"radio\" [value]=\"HeatMapEnum.Middle\" [(ngModel)]=\"heatMap\" class=\"heatmapRadio\"> Middle\r\n\t<input type=\"radio\" [value]=\"HeatMapEnum.End\" [(ngModel)]=\"heatMap\" class=\"heatmapRadio\"> End\r\n</div>"

/***/ }),

/***/ "./src/app/game-board/game-board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/game-board/game-board.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board-row {\n  display: flex; }\n\n.board-col {\n  display: flex; }\n\n.board {\n  border: 1px gray solid;\n  border-radius: 5px;\n  display: table;\n  background: #c5c4ba; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1ib2FyZC9EOlxcU291cmNlXFxNaXhlZC1CYWdnbGUvc3JjXFxhcHBcXGdhbWUtYm9hcmRcXGdhbWUtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFhLEVBQ2I7O0FBRUQ7RUFDQyxjQUFhLEVBQ2I7O0FBRUQ7RUFDQyx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2YsZUFBYztFQUNkLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZC1yb3d7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJvYXJkLWNvbHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYm9hcmR7XHJcblx0Ym9yZGVyOiAxcHggZ3JheSBzb2xpZDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJhY2tncm91bmQ6ICNjNWM0YmE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game-board/game-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-board/game-board.component.ts ***!
  \****************************************************/
/*! exports provided: GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../heatMap/heatMapEnum */ "./src/app/heatMap/heatMapEnum.ts");





var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent() {
        this.HeatMapEnum = _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__["HeatMapEnum"];
        this.boardLoaded = false;
        this.faUndo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUndo"];
        this.faExchangeAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExchangeAlt"];
        this.zoomTick = 1;
        this.heatMap = _heatMap_heatMapEnum__WEBPACK_IMPORTED_MODULE_3__["HeatMapEnum"].None;
    }
    GameBoardComponent.prototype.ngOnChanges = function () {
        this.boardLoaded = this.dice.length > 0;
    };
    GameBoardComponent.prototype.rotateCc = function () {
        var tempArray = new Array();
        var _loop_1 = function (x) {
            var tempRow = [];
            this_1.dice.forEach(function (row) { return tempRow.push(row[x]); });
            tempArray.push(tempRow.reverse());
        };
        var this_1 = this;
        for (var x = 0; x < this.dice[0].length; x++) {
            _loop_1(x);
        }
        this.dice = tempArray;
    };
    GameBoardComponent.prototype.rotateCcw = function () {
        var tempArray = new Array();
        var _loop_2 = function (x) {
            var tempRow = [];
            this_2.dice.forEach(function (row) { return tempRow.push(row[x]); });
            tempArray.push(tempRow);
        };
        var this_2 = this;
        for (var x = this.dice[0].length - 1; x > -1; x--) {
            _loop_2(x);
        }
        this.dice = tempArray;
    };
    GameBoardComponent.prototype.flip = function () {
        this.dice.forEach(function (row) { return row = row.reverse(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GameBoardComponent.prototype, "dice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GameBoardComponent.prototype, "word", void 0);
    GameBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'game-board',
            template: __webpack_require__(/*! ./game-board.component.html */ "./src/app/game-board/game-board.component.html"),
            styles: [__webpack_require__(/*! ./game-board.component.scss */ "./src/app/game-board/game-board.component.scss")]
        })
    ], GameBoardComponent);
    return GameBoardComponent;
}());



/***/ }),

/***/ "./src/app/game-board/hashenum.ts":
/*!****************************************!*\
  !*** ./src/app/game-board/hashenum.ts ***!
  \****************************************/
/*! exports provided: HashEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashEnum", function() { return HashEnum; });
var HashEnum;
(function (HashEnum) {
    HashEnum[HashEnum["DoesNotExist"] = 0] = "DoesNotExist";
    HashEnum[HashEnum["PartialWord"] = 1] = "PartialWord";
    HashEnum[HashEnum["FullWord"] = 2] = "FullWord";
    HashEnum[HashEnum["ContinuingWord"] = 3] = "ContinuingWord";
})(HashEnum || (HashEnum = {}));


/***/ }),

/***/ "./src/app/game-board/point.ts":
/*!*************************************!*\
  !*** ./src/app/game-board/point.ts ***!
  \*************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());



/***/ }),

/***/ "./src/app/game-board/traverse.service.ts":
/*!************************************************!*\
  !*** ./src/app/game-board/traverse.service.ts ***!
  \************************************************/
/*! exports provided: TraverseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraverseService", function() { return TraverseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point */ "./src/app/game-board/point.ts");
/* harmony import */ var _hashenum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashenum */ "./src/app/game-board/hashenum.ts");




var TraverseService = /** @class */ (function () {
    function TraverseService(hash, board) {
        this.hash = hash;
        this.board = board;
        this.foundWord = new Map();
    }
    TraverseService.prototype.highlightWord = function () {
        var path;
        for (var x = 0; x < this.board.length; x++) {
            for (var y = 0; y < this.board[x].length; y++) {
                this.board[x][y].selected = false;
            }
        }
        for (var x = 0; x < this.board.length; x++) {
            for (var y = 0; y < this.board[x].length; y++) {
                path = [];
                path.push(new _point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y));
                this.findNext(path, "", x, y, true);
            }
        }
    };
    TraverseService.prototype.getWordList = function () {
        var path;
        for (var x = 0; x < this.board.length; x++) {
            for (var y = 0; y < this.board[x].length; y++) {
                path = [];
                path.push(new _point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y));
                this.findNext(path, "", x, y, false);
            }
        }
        return this.foundWord;
    };
    TraverseService.prototype.updateHeatMap = function (path) {
        var endIndex = path.length - 1;
        this.board[path[0].x][path[0].y].heatMap.addStart();
        this.board[path[endIndex].x][path[endIndex].y].heatMap.addEnd();
        for (var x = 1; x < endIndex; x++) {
            this.board[path[x].x][path[x].y].heatMap.addMiddle();
        }
    };
    TraverseService.prototype.findNext = function (path, assembledWord, x, y, highlightWord) {
        assembledWord += this.board[x][y].showing.toUpperCase();
        var hashValue = this.hash[assembledWord] || _hashenum__WEBPACK_IMPORTED_MODULE_3__["HashEnum"].DoesNotExist;
        var searchAround = false;
        switch (hashValue) {
            case _hashenum__WEBPACK_IMPORTED_MODULE_3__["HashEnum"].DoesNotExist:
                return;
            case _hashenum__WEBPACK_IMPORTED_MODULE_3__["HashEnum"].PartialWord:
                searchAround = true;
                break;
            case _hashenum__WEBPACK_IMPORTED_MODULE_3__["HashEnum"].FullWord:
                if (highlightWord) {
                    this.highlight(path);
                }
                this.foundWord[assembledWord] = (this.foundWord[assembledWord] || 0) + 1;
                this.updateHeatMap(path);
                break;
            case _hashenum__WEBPACK_IMPORTED_MODULE_3__["HashEnum"].ContinuingWord:
                if (highlightWord) {
                    this.highlight(path);
                }
                this.foundWord[assembledWord] = (this.foundWord[assembledWord] || 0) + 1;
                searchAround = true;
                this.updateHeatMap(path);
                break;
            default:
                break;
        }
        if (searchAround) {
            for (var addX = -1; addX < 2; addX++) {
                var _loop_1 = function (addY) {
                    var moveX = x + addX;
                    var moveY = y + addY;
                    if (moveX > -1 && moveX < this_1.board.length
                        && moveY > -1 && moveY < this_1.board[x].length
                        && path.filter(function (p) { return p.x === moveX && p.y === moveY; }).length === 0) {
                        var newPath = path.slice();
                        newPath.push(new _point__WEBPACK_IMPORTED_MODULE_2__["Point"](moveX, moveY));
                        this_1.findNext(newPath, assembledWord, moveX, moveY, highlightWord);
                    }
                };
                var this_1 = this;
                for (var addY = -1; addY < 2; addY++) {
                    _loop_1(addY);
                }
            }
        }
    };
    TraverseService.prototype.highlight = function (path) {
        var _this = this;
        path.forEach(function (p) { return _this.board[p.x][p.y].selected = true; });
    };
    TraverseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Map, Array])
    ], TraverseService);
    return TraverseService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n\t<h1>\r\n\t\tWelcome to Mixed Baggle!\r\n\t</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/heatMap/heatMap.ts":
/*!************************************!*\
  !*** ./src/app/heatMap/heatMap.ts ***!
  \************************************/
/*! exports provided: HeatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatMap", function() { return HeatMap; });
var HeatMap = /** @class */ (function () {
    function HeatMap() {
        this.start = 0;
        this.middle = 0;
        this.end = 0;
    }
    /**
     * addStart
     */
    HeatMap.prototype.addStart = function () {
        this.start++;
    };
    /**
     * addMiddle
     */
    HeatMap.prototype.addMiddle = function () {
        this.middle++;
    };
    /**
     * addEnd
     */
    HeatMap.prototype.addEnd = function () {
        this.end++;
    };
    HeatMap.prototype.toString = function () {
        return "start: " + this.start + ", middle: " + this.middle + ", end: " + this.end;
    };
    return HeatMap;
}());



/***/ }),

/***/ "./src/app/heatMap/heatMapEnum.ts":
/*!****************************************!*\
  !*** ./src/app/heatMap/heatMapEnum.ts ***!
  \****************************************/
/*! exports provided: HeatMapEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatMapEnum", function() { return HeatMapEnum; });
var HeatMapEnum;
(function (HeatMapEnum) {
    HeatMapEnum[HeatMapEnum["None"] = 0] = "None";
    HeatMapEnum[HeatMapEnum["Start"] = 1] = "Start";
    HeatMapEnum[HeatMapEnum["Middle"] = 2] = "Middle";
    HeatMapEnum[HeatMapEnum["End"] = 3] = "End";
})(HeatMapEnum || (HeatMapEnum = {}));


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h3>Customize your board!</h3>\r\n\t<settings [settings]=\"settings\"></settings>\r\n\t<div>\r\n\t\t<input type=\"button\" value=\"Generate Board!\" (click)=\"generateBoard()\">\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class=\"col-sm-5\">\r\n\t\t<game-board [dice]=\"shakenDice\"></game-board>\r\n\t</div>\r\n\t<div class=\"col-sm-5\">\r\n\t\t<input type=\"text\" [(ngModel)]=\"enteredText\" (ngModelChange)=\"showOnBoard()\" (keyup.enter)=\"onKey($event)\">\r\n\t\t<div>\r\n\t\t\t<div>Points: {{totalPoints}}</div>\r\n\t\t\t<div *ngFor=\"let guessedWord of toArray(guessedWords)\">\r\n\t\t\t\t{{ guessedWord.key }} - {{ guessedWord.value }}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div>\r\n\t<div>Found {{wordCount}} words in {{timeTaken}} milliseconds.</div>\r\n\t<div>\r\n\t\t<fa-icon [icon]=\"faAngleDown\" *ngIf=\"showFoundWords\" (click)=\"showFoundWords = !showFoundWords\"></fa-icon>\r\n\t\t<fa-icon [icon]=\"faAngleUp\" *ngIf=\"!showFoundWords\" (click)=\"showFoundWords = !showFoundWords\"></fa-icon>\r\n\t</div>\r\n\t<div *ngIf=\"showFoundWords\">\r\n\t\t<div *ngFor=\"let word of toArray(wordList)\">\r\n\t\t\t{{word.key | json}} --> {{word.value}}\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shaker_shaker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaker/shaker.service */ "./src/app/shaker/shaker.service.ts");
/* harmony import */ var _game_board_traverse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-board/traverse.service */ "./src/app/game-board/traverse.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game-board/hashenum */ "./src/app/game-board/hashenum.ts");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/settings */ "./src/app/settings/settings.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.title = 'mixed-baggle';
        this.settings = new _settings_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]();
        this.shakenDice = [];
        this.minlength = 4;
        this.timeTaken = 0;
        this.wordCount = 0;
        this.totalPoints = 0;
        this.showFoundWords = false;
        this.faAngleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDown"];
        this.faAngleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleUp"];
        this.generateBoard = function () {
            if (_this.settings.height * _this.settings.width > _this.settings.dice.dice.length) {
                return;
            }
            _this.shakenDice = [];
            var availableLetters = _this.settings.dice.dice.slice();
            var shakerService = new _shaker_shaker_service__WEBPACK_IMPORTED_MODULE_2__["ShakerService"](_this.settings.seed);
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            for (var x = 0; x < _this.settings.height; x++) {
                var col = new Array();
                var _loop_1 = function (y) {
                    if (availableLetters.length > 0) {
                        var chosenDie_1 = shakerService.chooseDie(availableLetters);
                        availableLetters.filter(function (value, index, arr) {
                            return value === chosenDie_1;
                        });
                        chosenDie_1.showing = shakerService.chooseSide(chosenDie_1);
                        var split = chosenDie_1.showing.split("");
                        split.forEach(function (character) {
                            var charIndex = letters.indexOf(character);
                            if (charIndex > -1) {
                                letters.splice(charIndex, 1);
                            }
                        });
                        col.push(chosenDie_1);
                    }
                };
                for (var y = 0; y < _this.settings.width; y++) {
                    _loop_1(y);
                }
                _this.shakenDice.push(col);
            }
            var start = new Date();
            var filteredWordList = _this.settings.dictionary.trimWordsContainingLetters(letters);
            filteredWordList = filteredWordList.filter(function (x) { return x.length >= _this.minlength; });
            var hashTable = _this.hashWordList(filteredWordList);
            var traverse = new _game_board_traverse_service__WEBPACK_IMPORTED_MODULE_3__["TraverseService"](hashTable, _this.shakenDice);
            _this.wordList = traverse.getWordList();
            var end = new Date();
            _this.timeTaken = end.getTime() - start.getTime();
            _this.wordCount = Object.keys(_this.wordList).length;
            hashTable = new Map();
        };
        this.showOnBoard = function () {
            var word = [_this.enteredText];
            var traverse = new _game_board_traverse_service__WEBPACK_IMPORTED_MODULE_3__["TraverseService"](_this.hashWordList(word), _this.shakenDice);
            traverse.highlightWord();
        };
        this.onKey = function ($event) {
            if (!_this.guessedWords[_this.enteredText.toUpperCase()]
                && _this.wordList[_this.enteredText.toUpperCase()]) {
                var wordLength = _this.enteredText.length > 8 ? 8 : _this.enteredText.length;
                var points = _this.scoring[wordLength];
                _this.guessedWords[_this.enteredText.toUpperCase()] = points;
                _this.totalPoints += points;
                _this.enteredText = "";
            }
            else {
                $event.target.select();
            }
        };
        this.ascOrder = function (a, b) {
            if (a.key > b.key)
                return a.key;
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.guessedWords = new Map();
        this.wordList = new Map();
        this.scoring = new Map();
        this.scoring[3] = 1;
        this.scoring[4] = 1;
        this.scoring[5] = 2;
        this.scoring[6] = 3;
        this.scoring[7] = 5;
        this.scoring[8] = 11;
    };
    HomeComponent.prototype.hashWordList = function (wordList) {
        var hashTable = new Map();
        wordList.forEach(function (element) {
            element = element.toUpperCase();
            var wordArray = element.split("");
            var miniWord = "";
            var result = hashTable[element] || _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].DoesNotExist;
            switch (result) {
                case _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].DoesNotExist:
                    hashTable[element] = _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].FullWord;
                    break;
                case _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].PartialWord:
                    hashTable[element] = _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].ContinuingWord;
                    break;
                default:
                    break;
            }
            for (var x = 0; x < wordArray.length - 1; x++) {
                miniWord += wordArray[x];
                result = hashTable[miniWord] || _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].DoesNotExist;
                switch (result) {
                    case _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].DoesNotExist:
                        hashTable[miniWord] = _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].PartialWord;
                        break;
                    case _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].FullWord:
                        hashTable[miniWord] = _game_board_hashenum__WEBPACK_IMPORTED_MODULE_5__["HashEnum"].ContinuingWord;
                        break;
                    default:
                        break;
                }
            }
        });
        return hashTable;
    };
    HomeComponent.prototype.toArray = function (obj) {
        return Object.keys(obj).map(function (key) { return { "key": key, "value": obj[key] }; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var matModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: matModules.slice(),
            exports: matModules.slice(),
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div>\r\n\t\t<label>Settings</label>\r\n\t\t<fa-icon [icon]=\"faAngleDown\" *ngIf=\"showSettings\" (click)=\"showSettings = !showSettings\"></fa-icon>\r\n\t\t<fa-icon [icon]=\"faAngleUp\" *ngIf=\"!showSettings\" (click)=\"showSettings = !showSettings\"></fa-icon>\r\n\t</div>\r\n\t<div *ngIf=\"showSettings\">\r\n\t\t<div>\r\n\t\t\t<label>Dice Collection</label>\r\n\t\t\t<select [(ngModel)]=\"settings.dice\">\r\n\t\t\t\t<option *ngFor=\"let collection of dices\" [ngValue]=\"collection\">{{collection.name}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Dictionary Collection</label>\r\n\t\t\t<select [(ngModel)]=\"settings.dictionary\">\r\n\t\t\t\t<option *ngFor=\"let collection of dictionaries\" [ngValue]=\"collection\">{{collection.name}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Minimum Word Length</label>\r\n\t\t\t<input type=\"number\" [(ngModel)]=\"settings.minlength\" min=3 max=36>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Board Size</label>\r\n\t\t\t<input type=\"number\" [(ngModel)]=\"settings.height\" min=3 max=9>\r\n\t\t\tBY\r\n\t\t\t<input type=\"number\" [(ngModel)]=\"settings.width\" min=3 max=9>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Seed</label>\r\n\t\t\t<input type=\"number\" [(ngModel)]=\"settings.seed\" min=0 [max]=\"maxSeed\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/app/settings/settings.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dictionary/dictionary.service */ "./src/app/dictionary/dictionary.service.ts");
/* harmony import */ var _dice_dice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dice/dice.service */ "./src/app/dice/dice.service.ts");







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dictionaryService, diceService) {
        this.dictionaryService = dictionaryService;
        this.diceService = diceService;
        this.showSettings = true;
        this.maxSeed = 9999999;
        this.faAngleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleDown"];
        this.faAngleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleUp"];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings.seed = Math.floor(Math.random() * this.maxSeed);
        this.dices = this.diceService.getAllCollections();
        this.dictionaries = this.dictionaryService.getAllCollections();
        if (this.dices.length > 0) {
            this.settings.dice = this.dices[0];
            this.settings.height = this.settings.dice.height;
            this.settings.width = this.settings.dice.width;
        }
        if (this.dictionaries.length > 0) {
            this.settings.dictionary = this.dictionaries[0];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings__WEBPACK_IMPORTED_MODULE_2__["Settings"])
    ], SettingsComponent.prototype, "settings", void 0);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_4__["DictionaryService"], _dice_dice_service__WEBPACK_IMPORTED_MODULE_5__["DiceService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.ts":
/*!**************************************!*\
  !*** ./src/app/settings/settings.ts ***!
  \**************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
        this.minlength = 4;
        this.height = 6;
        this.width = 6;
        this.seed = 0;
        this.showInitialWords = false;
        this.seconds = 180;
    }
    return Settings;
}());



/***/ }),

/***/ "./src/app/shaker/random.ts":
/*!**********************************!*\
  !*** ./src/app/shaker/random.ts ***!
  \**********************************/
/*! exports provided: Random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return Random; });
/**
 * copied almost directly from Mersenne Twister implementation found in https://gist.github.com/banksean/300494
 * all rights reserved to him.
 */
var Random = /** @class */ (function () {
    /* mti==N+1 means mt[N] is not initialized */
    function Random(seed) {
        if (seed === void 0) { seed = null; }
        /* least significant r bits */
        this.mt = new Array(Random.N);
        /* the array for the state vector */
        this.mti = Random.N + 1;
        if (seed == null) {
            seed = new Date().getTime();
        }
        this.init_genrand(seed);
    }
    Random.prototype.init_genrand = function (s) {
        this.mt[0] = s >>> 0;
        for (this.mti = 1; this.mti < Random.N; this.mti++) {
            var s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
            this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
                + this.mti;
            /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
            /* In the previous versions, MSBs of the seed affect   */
            /* only MSBs of the array mt[].                        */
            /* 2002/01/09 modified by Makoto Matsumoto             */
            this.mt[this.mti] >>>= 0;
            /* for >32 bit machines */
        }
    };
    /**
     * generates a random number on [0,0xffffffff]-interval
     * @private
     */
    Random.prototype._nextInt32 = function () {
        var y;
        var mag01 = new Array(0x0, Random.MATRIX_A);
        /* mag01[x] = x * MATRIX_A  for x=0,1 */
        if (this.mti >= Random.N) { /* generate N words at one time */
            var kk;
            if (this.mti == Random.N + 1) /* if init_genrand() has not been called, */
                this.init_genrand(5489);
            /* a default initial seed is used */
            for (kk = 0; kk < Random.N - Random.M; kk++) {
                y = (this.mt[kk] & Random.UPPER_MASK) | (this.mt[kk + 1] & Random.LOWER_MASK);
                this.mt[kk] = this.mt[kk + Random.M] ^ (y >>> 1) ^ mag01[y & 0x1];
            }
            for (; kk < Random.N - 1; kk++) {
                y = (this.mt[kk] & Random.UPPER_MASK) | (this.mt[kk + 1] & Random.LOWER_MASK);
                this.mt[kk] = this.mt[kk + (Random.M - Random.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
            }
            y = (this.mt[Random.N - 1] & Random.UPPER_MASK) | (this.mt[0] & Random.LOWER_MASK);
            this.mt[Random.N - 1] = this.mt[Random.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1];
            this.mti = 0;
        }
        y = this.mt[this.mti++];
        /* Tempering */
        y ^= (y >>> 11);
        y ^= (y << 7) & 0x9d2c5680;
        y ^= (y << 15) & 0xefc60000;
        y ^= (y >>> 18);
        return y >>> 0;
    };
    /**
     * generates an int32 pseudo random number
     * @param range: an optional [from, to] range, if not specified the result will be in range [0,0xffffffff]
     * @return {number}
     */
    Random.prototype.nextInt32 = function (range) {
        if (range === void 0) { range = null; }
        var result = this._nextInt32();
        if (range == null) {
            return result;
        }
        return (result % (range[1] - range[0])) + range[0];
    };
    /**
     * generates a random number on [0,0x7fffffff]-interval
     */
    Random.prototype.nextInt31 = function () {
        return (this._nextInt32() >>> 1);
    };
    /**
     * generates a random number on [0,1]-real-interval
     */
    Random.prototype.nextNumber = function () {
        return this._nextInt32() * (1.0 / 4294967295.0);
    };
    /**
     * generates a random number on [0,1) with 53-bit resolution
     */
    Random.prototype.nextNumber53 = function () {
        var a = this._nextInt32() >>> 5, b = this._nextInt32() >>> 6;
        return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
    };
    Random.N = 624;
    Random.M = 397;
    Random.MATRIX_A = 0x9908b0df;
    /* constant vector a */
    Random.UPPER_MASK = 0x80000000;
    /* most significant w-r bits */
    Random.LOWER_MASK = 0x7fffffff;
    return Random;
}());



/***/ }),

/***/ "./src/app/shaker/shaker.service.ts":
/*!******************************************!*\
  !*** ./src/app/shaker/shaker.service.ts ***!
  \******************************************/
/*! exports provided: ShakerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShakerService", function() { return ShakerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random */ "./src/app/shaker/random.ts");



var ShakerService = /** @class */ (function () {
    function ShakerService(seed) {
        this.random = new _random__WEBPACK_IMPORTED_MODULE_2__["Random"](seed);
    }
    ShakerService.prototype.chooseDie = function (dice) {
        var index = this.random.nextInt32([0, dice.length]);
        var die = dice[index];
        dice.splice(index, 1);
        return die;
    };
    ShakerService.prototype.chooseSide = function (die) {
        var index = this.random.nextInt32([0, die.sides.length]);
        return die.sides[index];
    };
    ShakerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], ShakerService);
    return ShakerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Source\Mixed-Baggle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map