(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["src_app_pages_movie-details_movie-details_module_ts"],{

/***/ 6342:
/*!******************************************************************************!*\
  !*** ./src/app/pages/movie-details/movie-details-page/movie-details.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsPage": () => (/* binding */ MovieDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_movie_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./movie-details.page.html */ 4971);
/* harmony import */ var _movie_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-details.page.scss */ 4026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/movies.service */ 9991);






let MovieDetailsPage = class MovieDetailsPage {
    constructor(moviesService, route, router) {
        this.moviesService = moviesService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.moviesService.getMovie(id).subscribe((movie) => (this.movie = movie));
    }
    onVoteUp() {
        this.moviesService.voteUpMovie(this.movie).subscribe();
    }
    onVoteDown() {
        this.moviesService.voteDownMovie(this.movie).subscribe();
    }
    removeMovie() {
        this.moviesService.removeMovie(this.movie.id);
        this.router.navigate(['/movies']);
    }
};
MovieDetailsPage.ctorParameters = () => [
    { type: src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_2__.MoviesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MovieDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-movie-details',
        template: _raw_loader_movie_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_movie_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MovieDetailsPage);



/***/ }),

/***/ 289:
/*!*********************************************************************!*\
  !*** ./src/app/pages/movie-details/movie-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsPageRoutingModule": () => (/* binding */ MovieDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _movie_details_page_movie_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-details-page/movie-details.page */ 6342);




const routes = [
    {
        path: '',
        component: _movie_details_page_movie_details_page__WEBPACK_IMPORTED_MODULE_0__.MovieDetailsPage,
    },
];
let MovieDetailsPageRoutingModule = class MovieDetailsPageRoutingModule {
};
MovieDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MovieDetailsPageRoutingModule);



/***/ }),

/***/ 5873:
/*!*************************************************************!*\
  !*** ./src/app/pages/movie-details/movie-details.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsPageModule": () => (/* binding */ MovieDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _movie_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-details-routing.module */ 289);
/* harmony import */ var _movie_details_page_movie_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-details-page/movie-details.page */ 6342);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _pipes_movie_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/movie-duration.pipe */ 6101);









let MovieDetailsPageModule = class MovieDetailsPageModule {
};
MovieDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _movie_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MovieDetailsPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_movie_details_page_movie_details_page__WEBPACK_IMPORTED_MODULE_1__.MovieDetailsPage, _pipes_movie_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.MovieDurationPipe],
    })
], MovieDetailsPageModule);



/***/ }),

/***/ 6101:
/*!******************************************************************!*\
  !*** ./src/app/pages/movie-details/pipes/movie-duration.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDurationPipe": () => (/* binding */ MovieDurationPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let MovieDurationPipe = class MovieDurationPipe {
    transform(durationInMinutes) {
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes - hours * 60;
        return `${hours}h ${minutes}m`;
    }
};
MovieDurationPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'movieDuration',
    })
], MovieDurationPipe);



/***/ }),

/***/ 4026:
/*!********************************************************************************!*\
  !*** ./src/app/pages/movie-details/movie-details-page/movie-details.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".movie-img {\n  width: 100%;\n  height: 400px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDRiIsImZpbGUiOiJtb3ZpZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4971:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movie-details/movie-details-page/movie-details.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/movies\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{ movie?.title }} ({{ movie?.year}})</ion-title>\r\n\r\n    <ion-button slot=\"end\" (click)=\"removeMovie()\">\r\n      <ion-icon name=\"trash\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ng-container *ngIf=\"movie; else noMovie\">\r\n    <ion-img class=\"movie-img\" [src]=\"movie?.poster\"></ion-img>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text class=\"ion-text-start\">\r\n            <h2>Puntuación</h2>\r\n            <app-rating\r\n              [votesUp]=\"movie?.ratingPositive\"\r\n              [votesDown]=\"movie?.ratingNegative\"\r\n              (voteUpClick)=\"onVoteUp()\"\r\n              (voteDownClick)=\"onVoteDown()\"\r\n            ></app-rating>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-text class=\"ion-text-end\">\r\n            <h2>Duración</h2>\r\n            <p>{{ movie?.duration | movieDuration }}</p>\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2>Géneros</h2>\r\n          <span *ngFor=\"let currentGenre of movie?.genre\"\r\n            >#{{ currentGenre }}\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ng-container>\r\n  <ng-template #noMovie>\r\n    <ion-spinner></ion-spinner>\r\n  </ng-template>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_movie-details_movie-details_module_ts.js.map