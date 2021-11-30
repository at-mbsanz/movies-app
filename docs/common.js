(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 3647:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/actor-card/actor-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorCardComponent": () => (/* binding */ ActorCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_actor_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./actor-card.component.html */ 8997);
/* harmony import */ var _actor_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actor-card.component.scss */ 8598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let ActorCardComponent = class ActorCardComponent {
    constructor() {
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    onClickCard() {
        this.cardClicked.emit();
    }
};
ActorCardComponent.ctorParameters = () => [];
ActorCardComponent.propDecorators = {
    actor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    cardClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ActorCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-actor-card',
        template: _raw_loader_actor_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actor_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActorCardComponent);



/***/ }),

/***/ 6864:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/movie-card/movie-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieCardComponent": () => (/* binding */ MovieCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_movie_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./movie-card.component.html */ 8686);
/* harmony import */ var _movie_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-card.component.scss */ 6770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let MovieCardComponent = class MovieCardComponent {
    constructor() {
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.voteUpClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.voteDownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    onClickCard() {
        this.cardClicked.emit();
    }
    onVoteUp() {
        this.voteUpClick.emit(this.movie.id);
    }
    onVoteDown() {
        this.voteDownClick.emit();
    }
};
MovieCardComponent.ctorParameters = () => [];
MovieCardComponent.propDecorators = {
    movie: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    cardClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    voteUpClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    voteDownClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
MovieCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-movie-card',
        template: _raw_loader_movie_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_movie_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MovieCardComponent);



/***/ }),

/***/ 9453:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rating.component.html */ 1586);
/* harmony import */ var _rating_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.scss */ 2878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let RatingComponent = class RatingComponent {
    constructor() {
        this.votesUp = 0;
        this.votesDown = 0;
        this.voteUpClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.voteDownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    voteUp() {
        this.voteUpClick.emit();
    }
    voteDown() {
        this.voteDownClick.emit();
    }
};
RatingComponent.ctorParameters = () => [];
RatingComponent.propDecorators = {
    votesUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    votesDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    voteUpClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    voteDownClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
RatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-rating',
        template: _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RatingComponent);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/movie-card/movie-card.component */ 6864);
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rating/rating.component */ 9453);
/* harmony import */ var _components_actor_card_actor_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/actor-card/actor-card.component */ 3647);







let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_0__.MovieCardComponent, _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_1__.RatingComponent, _components_actor_card_actor_card_component__WEBPACK_IMPORTED_MODULE_2__.ActorCardComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule],
        exports: [_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_0__.MovieCardComponent, _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_1__.RatingComponent, _components_actor_card_actor_card_component__WEBPACK_IMPORTED_MODULE_2__.ActorCardComponent],
    })
], SharedModule);



/***/ }),

/***/ 8598:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/actor-card/actor-card.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".movie-img {\n  width: 100%;\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdG9yLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKIiwiZmlsZSI6ImFjdG9yLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ 6770:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/movie-card/movie-card.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".movie-img {\n  width: 100%;\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNGIiwiZmlsZSI6Im1vdmllLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi8vTU9EaWZpY2FyIHRhbWHDsW8gaW1nIHRpcG8gZ2lmXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 2878:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".rating {\n  width: 100%;\n}\n\n.bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 8997:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/actor-card/actor-card.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n    <img\r\n      class=\"movie-img pointer\"\r\n      [src]=\"actor.img\"\r\n      onerror=\"this.src = './assets/error.jpg'\"\r\n      (click)=\"onClickCard()\"\r\n    />\r\n  \r\n    <ion-card-header class=\"pointer\" (click)=\"onClickCard()\">\r\n      <ion-card-title>{{ actor.first_name }}</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size=\"5\">\r\n            <span *ngIf=\"actor.gender.length\">No binario</span>\r\n      \r\n          </ion-col>\r\n          <ion-col size=\"7\">\r\n          \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  ");

/***/ }),

/***/ 8686:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/movie-card/movie-card.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n  <img\r\n    class=\"movie-img pointer\"\r\n    [src]=\"movie.poster\"\r\n    onerror=\"this.src = './assets/error.jpg'\"\r\n    (click)=\"onClickCard()\"\r\n  />\r\n\r\n  <ion-card-header class=\"pointer\" (click)=\"onClickCard()\">\r\n    <ion-card-title>{{ movie.title }}</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"5\">\r\n          <span *ngIf=\"!movie.genre?.length\">Género desconocido</span>\r\n          <span *ngFor=\"let currentGenre of movie.genre\"\r\n            >#{{ currentGenre }}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <app-rating\r\n            [votesUp]=\"movie.ratingPositive\"\r\n            [votesDown]=\"movie.ratingNegative\"\r\n            (voteUpClick)=\"onVoteUp()\"\r\n            (voteDownClick)=\"onVoteDown()\"\r\n          ></app-rating>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ 1586:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rating/rating.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid class=\"rating ion-no-padding\">\r\n  <ion-row\r\n    class=\"ion-text-center ion-justify-content-center ion-align-items-center\"\r\n  >\r\n    <ion-col size=\"5\">\r\n      <ion-button size=\"small\" (click)=\"voteUp()\">\r\n        <ion-icon slot=\"start\" color=\"success\" name=\"thumbs-up\"></ion-icon>\r\n        {{ votesUp }}\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <span class=\"bold\">\r\n        {{ (votesUp / (votesUp + votesDown)) * 10 | number: \"1.1-1\" }}\r\n      </span>\r\n    </ion-col>\r\n    <ion-col size=\"5\">\r\n      <ion-button size=\"small\" (click)=\"voteDown()\">\r\n        <ion-icon slot=\"start\" color=\"danger\" name=\"thumbs-down\"></ion-icon>\r\n        {{ votesDown }}\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map