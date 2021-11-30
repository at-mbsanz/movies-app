(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["src_app_pages_companies_companies_module_ts"],{

/***/ 1399:
/*!******************************************************************!*\
  !*** ./src/app/pages/companies/companies-page/companies.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesPage": () => (/* binding */ CompaniesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_companies_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./companies.page.html */ 3654);
/* harmony import */ var _companies_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companies.page.scss */ 848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CompaniesPage = class CompaniesPage {
    constructor() { }
    ngOnInit() { }
};
CompaniesPage.ctorParameters = () => [];
CompaniesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-companies',
        template: _raw_loader_companies_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_companies_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CompaniesPage);



/***/ }),

/***/ 5575:
/*!*************************************************************!*\
  !*** ./src/app/pages/companies/companies-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesPageRoutingModule": () => (/* binding */ CompaniesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _companies_page_companies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies-page/companies.page */ 1399);




const routes = [
    {
        path: '',
        component: _companies_page_companies_page__WEBPACK_IMPORTED_MODULE_0__.CompaniesPage,
    },
];
let CompaniesPageRoutingModule = class CompaniesPageRoutingModule {
};
CompaniesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompaniesPageRoutingModule);



/***/ }),

/***/ 9594:
/*!*****************************************************!*\
  !*** ./src/app/pages/companies/companies.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesPageModule": () => (/* binding */ CompaniesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies-routing.module */ 5575);
/* harmony import */ var _companies_page_companies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companies-page/companies.page */ 1399);







let CompaniesPageModule = class CompaniesPageModule {
};
CompaniesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _companies_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompaniesPageRoutingModule],
        declarations: [_companies_page_companies_page__WEBPACK_IMPORTED_MODULE_1__.CompaniesPage],
    })
], CompaniesPageModule);



/***/ }),

/***/ 848:
/*!********************************************************************!*\
  !*** ./src/app/pages/companies/companies-page/companies.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW5pZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3654:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companies/companies-page/companies.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Estudios</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  Estudios\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_companies_companies_module_ts.js.map