(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["src_app_pages_movies_movies_module_ts"],{

/***/ 2574:
/*!*********************************************************!*\
  !*** ./src/app/pages/movies/movies-page/movies.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesPage": () => (/* binding */ MoviesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_movies_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./movies.page.html */ 2258);
/* harmony import */ var _movies_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.page.scss */ 8570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/movies.service */ 9991);






let MoviesPage = class MoviesPage {
    constructor(moviesService, router) {
        this.moviesService = moviesService;
        this.router = router;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.moviesService
            .getMovies()
            .subscribe((movies) => (this.movies = movies));
    }
    goToMovie(id) {
        this.router.navigate(['/movies', id]);
    }
    onVoteUp(movie) {
        this.moviesService.voteUpMovie(movie).subscribe();
    }
    onVoteDown(movie) {
        this.moviesService.voteDownMovie(movie).subscribe();
    }
};
MoviesPage.ctorParameters = () => [
    { type: src_app_shared_services_movies_service__WEBPACK_IMPORTED_MODULE_2__.MoviesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MoviesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-movies',
        template: _raw_loader_movies_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_movies_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MoviesPage);



/***/ }),

/***/ 92:
/*!*******************************************************!*\
  !*** ./src/app/pages/movies/movies-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesPageRoutingModule": () => (/* binding */ MoviesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _movies_page_movies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies-page/movies.page */ 2574);




const routes = [
    {
        path: '',
        component: _movies_page_movies_page__WEBPACK_IMPORTED_MODULE_0__.MoviesPage,
    },
    {
        path: 'new-movie',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_new-movie_new-movie_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../new-movie/new-movie.module */ 8100)).then((m) => m.NewMoviePageModule),
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_movie-details_movie-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../movie-details/movie-details.module */ 5873)).then((m) => m.MovieDetailsPageModule),
    },
];
let MoviesPageRoutingModule = class MoviesPageRoutingModule {
};
MoviesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MoviesPageRoutingModule);



/***/ }),

/***/ 9430:
/*!***********************************************!*\
  !*** ./src/app/pages/movies/movies.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesPageModule": () => (/* binding */ MoviesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-routing.module */ 92);
/* harmony import */ var _movies_page_movies_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-page/movies.page */ 2574);








let MoviesPageModule = class MoviesPageModule {
};
MoviesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _movies_routing_module__WEBPACK_IMPORTED_MODULE_1__.MoviesPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ],
        declarations: [_movies_page_movies_page__WEBPACK_IMPORTED_MODULE_2__.MoviesPage],
    })
], MoviesPageModule);



/***/ }),

/***/ 9991:
/*!***************************************************!*\
  !*** ./src/app/shared/services/movies.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesService": () => (/* binding */ MoviesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let MoviesService = class MoviesService {
    constructor(http) {
        this.http = http;
    }
    getMovies() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/movies`);
    }
    getMovie(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/movies/${id}`);
    }
    addMovie(movie) {
        const newMovie = Object.assign(Object.assign({}, movie), { ratingPositive: 0, ratingNegative: 0 });
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/movies`, newMovie);
    }
    updateMovie(updateMovie) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/movies/${updateMovie.id}`, updateMovie);
    }
    removeMovie(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/movies/${id}`);
    }
    voteUpMovie(movie) {
        movie.ratingPositive++;
        return this.updateMovie(movie);
    }
    voteDownMovie(movie) {
        movie.ratingNegative++;
        return this.updateMovie(movie);
    }
};
MoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MoviesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], MoviesService);



/***/ }),

/***/ 8570:
/*!***********************************************************!*\
  !*** ./src/app/pages/movies/movies-page/movies.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2258:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies/movies-page/movies.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Películas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-spinner *ngIf=\"!movies\"></ion-spinner>\r\n\r\n  <!-- fab placed to the top end -->\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge>\r\n    <ion-fab-button [routerLink]=\"['new-movie']\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let movie of movies\" size=\"12\" size-md=\"4\">\r\n        <app-movie-card\r\n        [movie]=\"movie\"\r\n          (cardClicked)=\"goToMovie(movie.id)\"\r\n          (voteUpClick)=\"onVoteUp(movie)\"\r\n          (voteDownClick)=\"onVoteDown(movie)\"\r\n        ></app-movie-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_movies_movies_module_ts.js.map