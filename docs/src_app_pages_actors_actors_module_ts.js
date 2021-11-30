(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["src_app_pages_actors_actors_module_ts"],{

/***/ 305:
/*!*********************************************************!*\
  !*** ./src/app/pages/actors/actors-page/actors.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorsPage": () => (/* binding */ ActorsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_actors_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./actors.page.html */ 3378);
/* harmony import */ var _actors_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actors.page.scss */ 4642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_actors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/actors.service */ 4461);






let ActorsPage = class ActorsPage {
    constructor(actorsService, router) {
        this.actorsService = actorsService;
        this.router = router;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.actorsService
            .getActors().subscribe((actors) => (this.actors = actors));
    }
    goToActor(id) {
        this.router.navigate(['/actors', id]);
    }
};
ActorsPage.ctorParameters = () => [
    { type: src_app_shared_services_actors_service__WEBPACK_IMPORTED_MODULE_2__.ActorsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ActorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-actors',
        template: _raw_loader_actors_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actors_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActorsPage);



/***/ }),

/***/ 651:
/*!*******************************************************!*\
  !*** ./src/app/pages/actors/actors-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorsPageRoutingModule": () => (/* binding */ ActorsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _actors_page_actors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actors-page/actors.page */ 305);




const routes = [
    {
        path: '',
        component: _actors_page_actors_page__WEBPACK_IMPORTED_MODULE_0__.ActorsPage,
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_actor-details_actor-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../actor-details/actor-details.module */ 6394)).then((m) => m.ActorDetailsPageModule),
    },
];
let ActorsPageRoutingModule = class ActorsPageRoutingModule {
};
ActorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActorsPageRoutingModule);



/***/ }),

/***/ 732:
/*!***********************************************!*\
  !*** ./src/app/pages/actors/actors.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorsPageModule": () => (/* binding */ ActorsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _actors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actors-routing.module */ 651);
/* harmony import */ var _actors_page_actors_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actors-page/actors.page */ 305);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let ActorsPageModule = class ActorsPageModule {
};
ActorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _actors_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActorsPageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_actors_page_actors_page__WEBPACK_IMPORTED_MODULE_1__.ActorsPage],
    })
], ActorsPageModule);



/***/ }),

/***/ 4461:
/*!***************************************************!*\
  !*** ./src/app/shared/services/actors.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorsService": () => (/* binding */ ActorsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let ActorsService = class ActorsService {
    constructor(http) {
        this.http = http;
    }
    getActors() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/actors`);
    }
    getActor(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/actors/${id}`);
    }
};
ActorsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ActorsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ActorsService);



/***/ }),

/***/ 4642:
/*!***********************************************************!*\
  !*** ./src/app/pages/actors/actors-page/actors.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RvcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3378:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actors/actors-page/actors.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Actores</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-spinner *ngIf=\"!actors\"></ion-spinner>\r\n\r\n  <!-- fab placed to the top end -->\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge>\r\n \r\n  </ion-fab>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let actor of actors\" size=\"12\" size-md=\"4\">\r\n        {{actor.first_name}}\r\n        <app-actor-card\r\n        [actor]=\"actor\"\r\n          (cardClicked)=\"goToActor(actor.id)\"\r\n        \r\n    \r\n        ></app-actor-card>\r\n         <!-- // importar en actors.module shared module para poder pintar-->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actors_actors_module_ts.js.map