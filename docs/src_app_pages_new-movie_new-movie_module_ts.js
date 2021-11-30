(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["src_app_pages_new-movie_new-movie_module_ts"],{

/***/ 5007:
/*!******************************************************************!*\
  !*** ./src/app/pages/new-movie/new-movie-page/new-movie.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMoviePage": () => (/* binding */ NewMoviePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_movie_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-movie.page.html */ 6249);
/* harmony import */ var _new_movie_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-movie.page.scss */ 8318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/movies.service */ 9991);







let NewMoviePage = class NewMoviePage {
    constructor(formBuilder, moviesService, router) {
        this.formBuilder = formBuilder;
        this.moviesService = moviesService;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.movieForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            poster: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            company: [''],
            year: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(3001)],
            ],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    submitMovieForm() {
        this.loading = true;
        this.moviesService.addMovie(this.movieForm.value).subscribe(() => {
            this.loading = false;
            this.router.navigateByUrl('/movies');
        }, (error) => {
            this.loading = false;
            console.log('Ha ocurrido un error añadiendo la película');
        });
    }
    resetForm() {
        this.movieForm.reset();
    }
};
NewMoviePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_2__.MoviesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
NewMoviePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-new-movie',
        template: _raw_loader_new_movie_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_movie_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewMoviePage);



/***/ }),

/***/ 3351:
/*!*************************************************************!*\
  !*** ./src/app/pages/new-movie/new-movie-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMoviePageRoutingModule": () => (/* binding */ NewMoviePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _new_movie_page_new_movie_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-movie-page/new-movie.page */ 5007);




const routes = [
    {
        path: '',
        component: _new_movie_page_new_movie_page__WEBPACK_IMPORTED_MODULE_0__.NewMoviePage,
    },
];
let NewMoviePageRoutingModule = class NewMoviePageRoutingModule {
};
NewMoviePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewMoviePageRoutingModule);



/***/ }),

/***/ 8100:
/*!*****************************************************!*\
  !*** ./src/app/pages/new-movie/new-movie.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMoviePageModule": () => (/* binding */ NewMoviePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _new_movie_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-movie-routing.module */ 3351);
/* harmony import */ var _new_movie_page_new_movie_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-movie-page/new-movie.page */ 5007);







let NewMoviePageModule = class NewMoviePageModule {
};
NewMoviePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_movie_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewMoviePageRoutingModule,
        ],
        declarations: [_new_movie_page_new_movie_page__WEBPACK_IMPORTED_MODULE_1__.NewMoviePage],
    })
], NewMoviePageModule);



/***/ }),

/***/ 8318:
/*!********************************************************************!*\
  !*** ./src/app/pages/new-movie/new-movie-page/new-movie.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".stronger {\n  color: blueviolet;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1tb3ZpZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoibmV3LW1vdmllLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHJvbmdlcntcclxuXHJcbiAgICBjb2xvcjpibHVldmlvbGV0O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG59Il19 */");

/***/ }),

/***/ 6249:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-movie/new-movie-page/new-movie.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/movies\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Nueva película</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"movieForm\" (submit)=\"submitMovieForm()\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Título</ion-label>\r\n      <ion-input\r\n        formControlName=\"title\"\r\n        type=\"text\"\r\n        placeholder=\"Título\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Póster (url)</ion-label>\r\n      <ion-input\r\n        formControlName=\"poster\"\r\n        type=\"url\"\r\n        placeholder=\"Póster (url)\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class= 'stronger'><strong> Estudios     \r\n      <ion-icon name=\"videocam\"></ion-icon></strong></ion-label>\r\n      <ion-select formControlName=\"company\" placeholder =\"Selecciona un estudio\" class='stronger'>\r\n        <ion-select-option value=\"Estudio 1\">Estudio 1</ion-select-option>\r\n        <ion-select-option value=\"Estudio 2\">Estudio 2</ion-select-option>\r\n        <ion-select-option value=\"Estudio 3\">Estudio 3</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Año</ion-label>\r\n      <ion-input\r\n        formControlName=\"year\"\r\n        type=\"number\"\r\n        placeholder=\"Año\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Duración</ion-label>\r\n      <ion-input\r\n        formControlName=\"duration\"\r\n        type=\"number\"\r\n        placeholder=\"Duración\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"ion-margin ion-text-right\">\r\n      <ion-button color=\"light\" type=\"button\" (click)=\"resetForm()\">\r\n        Reiniciar\r\n      </ion-button>\r\n      <ion-button\r\n        color=\"primary\"\r\n        type=\"submit\"\r\n        [disabled]=\"movieForm.invalid || loading\"\r\n      >\r\n        Guardar formulario\r\n      </ion-button>\r\n    </div>\r\n    <div *ngIf=\"loading\" class=\"ion-margin ion-text-right\">\r\n      <ion-spinner></ion-spinner>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-movie_new-movie_module_ts.js.map