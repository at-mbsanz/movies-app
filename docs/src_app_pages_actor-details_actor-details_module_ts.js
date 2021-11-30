(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["src_app_pages_actor-details_actor-details_module_ts"],{

/***/ 6092:
/*!******************************************************************************!*\
  !*** ./src/app/pages/actor-details/actor-details-page/actor-details.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorDetailsPage": () => (/* binding */ ActorDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_actor_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./actor-details.page.html */ 1431);
/* harmony import */ var _actor_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actor-details.page.scss */ 7976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_actors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/actors.service */ 4461);






let ActorDetailsPage = class ActorDetailsPage {
    constructor(actorsService, route, router) {
        this.actorsService = actorsService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.actorsService.getActor(id).subscribe((actor) => (this.actor = actor));
    }
};
ActorDetailsPage.ctorParameters = () => [
    { type: src_app_shared_services_actors_service__WEBPACK_IMPORTED_MODULE_2__.ActorsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ActorDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-actor-details',
        template: _raw_loader_actor_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actor_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActorDetailsPage);



/***/ }),

/***/ 5675:
/*!*********************************************************************!*\
  !*** ./src/app/pages/actor-details/actor-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorDetailsPageRoutingModule": () => (/* binding */ ActorDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _actor_details_page_actor_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actor-details-page/actor-details.page */ 6092);




const routes = [
    {
        path: '',
        component: _actor_details_page_actor_details_page__WEBPACK_IMPORTED_MODULE_0__.ActorDetailsPage,
    },
];
let ActorDetailsPageRoutingModule = class ActorDetailsPageRoutingModule {
};
ActorDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActorDetailsPageRoutingModule);



/***/ }),

/***/ 6394:
/*!*************************************************************!*\
  !*** ./src/app/pages/actor-details/actor-details.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorDetailsPageModule": () => (/* binding */ ActorDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _actor_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actor-details-routing.module */ 5675);
/* harmony import */ var _actor_details_page_actor_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actor-details-page/actor-details.page */ 6092);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let ActorDetailsPageModule = class ActorDetailsPageModule {
};
ActorDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _actor_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActorDetailsPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_actor_details_page_actor_details_page__WEBPACK_IMPORTED_MODULE_1__.ActorDetailsPage],
    })
], ActorDetailsPageModule);



/***/ }),

/***/ 7976:
/*!********************************************************************************!*\
  !*** ./src/app/pages/actor-details/actor-details-page/actor-details.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".movie-img {\n  width: 100%;\n  height: 400px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdG9yLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDRiIsImZpbGUiOiJhY3Rvci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1431:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actor-details/actor-details-page/actor-details.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p> hola actor-details page</p>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actor-details_actor-details_module_ts.js.map