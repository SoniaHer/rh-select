webpackJsonp([3],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosCondicionesPageModule", function() { return TerminosCondicionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminos_condiciones__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TerminosCondicionesPageModule = (function () {
    function TerminosCondicionesPageModule() {
    }
    TerminosCondicionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terminos_condiciones__["a" /* TerminosCondicionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terminos_condiciones__["a" /* TerminosCondicionesPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__["a" /* DocumentViewer */],
            ]
        })
    ], TerminosCondicionesPageModule);
    return TerminosCondicionesPageModule;
}());

//# sourceMappingURL=terminos-condiciones.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Document Viewer
 * @description
 * This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/*) or in any other file system directory available via the cordova file plugin.
 *
 * @usage
 * ```typescript
 * import { DocumentViewer } from '@ionic-native/document-viewer';
 *
 *
 * constructor(private document: DocumentViewer) { }
 *
 * ...
 * const options: DocumentViewerOptions = {
 *   title: 'My PDF'
 * }
 *
 * this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
 *
 * ```
 *
 * @interfaces
 * DocumentViewerOptions
 */
var DocumentViewer = (function (_super) {
    __extends(DocumentViewer, _super);
    function DocumentViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Displays the email composer pre-filled with data.
     *
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    /**
       * Displays the email composer pre-filled with data.
       *
       * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
       */
    DocumentViewer.prototype.getSupportInfo = /**
       * Displays the email composer pre-filled with data.
       *
       * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
       */
    function () { return; };
    /**
     * Check if the document can be shown
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {Array<DocumentViewerOptions>} options
     * @param [onPossible] {Function}
     * @param [onMissingApp] {Function}
     * @param [onImpossible] {Function}
     * @param [onError] {Function}
     */
    /**
       * Check if the document can be shown
       *
       * @param url {string} Url to the file
       * @param contentType {string} Content type of the file
       * @param options {Array<DocumentViewerOptions>} options
       * @param [onPossible] {Function}
       * @param [onMissingApp] {Function}
       * @param [onImpossible] {Function}
       * @param [onError] {Function}
       */
    DocumentViewer.prototype.canViewDocument = /**
       * Check if the document can be shown
       *
       * @param url {string} Url to the file
       * @param contentType {string} Content type of the file
       * @param options {Array<DocumentViewerOptions>} options
       * @param [onPossible] {Function}
       * @param [onMissingApp] {Function}
       * @param [onImpossible] {Function}
       * @param [onError] {Function}
       */
    function (url, contentType, options, onPossible, onMissingApp, onImpossible, onError) { };
    /**
     * Opens the file
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {DocumentViewerOptions} options
     * @param [onShow] {Function}
     * @param [onClose] {Function}
     * @param [onMissingApp] {Function}
     * @param [onError] {Function}
     */
    /**
       * Opens the file
       *
       * @param url {string} Url to the file
       * @param contentType {string} Content type of the file
       * @param options {DocumentViewerOptions} options
       * @param [onShow] {Function}
       * @param [onClose] {Function}
       * @param [onMissingApp] {Function}
       * @param [onError] {Function}
       */
    DocumentViewer.prototype.viewDocument = /**
       * Opens the file
       *
       * @param url {string} Url to the file
       * @param contentType {string} Content type of the file
       * @param options {DocumentViewerOptions} options
       * @param [onShow] {Function}
       * @param [onClose] {Function}
       * @param [onMissingApp] {Function}
       * @param [onError] {Function}
       */
    function (url, contentType, options, onShow, onClose, onMissingApp, onError) { };
    DocumentViewer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DocumentViewer.prototype, "getSupportInfo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Function, Function, Function, Function]),
        __metadata("design:returntype", void 0)
    ], DocumentViewer.prototype, "canViewDocument", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Function, Function, Function, Function]),
        __metadata("design:returntype", void 0)
    ], DocumentViewer.prototype, "viewDocument", null);
    /**
     * @name Document Viewer
     * @description
     * This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/*) or in any other file system directory available via the cordova file plugin.
     *
     * @usage
     * ```typescript
     * import { DocumentViewer } from '@ionic-native/document-viewer';
     *
     *
     * constructor(private document: DocumentViewer) { }
     *
     * ...
     * const options: DocumentViewerOptions = {
     *   title: 'My PDF'
     * }
     *
     * this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
     *
     * ```
     *
     * @interfaces
     * DocumentViewerOptions
     */
    DocumentViewer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Document Viewer',
            plugin: 'cordova-plugin-document-viewer',
            pluginRef: 'SitewaertsDocumentViewer',
            repo: 'https://github.com/sitewaerts/cordova-plugin-document-viewer',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], DocumentViewer);
    return DocumentViewer;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosCondicionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TerminosCondicionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosCondicionesPage = (function () {
    function TerminosCondicionesPage(navCtrl, navParams, document) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.document = document;
        this.document.viewDocument('assets/pdf/terminosycondiciones.pdf', 'application/pdf', options);
    }
    TerminosCondicionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminosCondicionesPage');
    };
    TerminosCondicionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminos-condiciones',template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\terminos-condiciones\terminos-condiciones.html"*/'<!--\n  Generated template for the TerminosCondicionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>terminos-condiciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\terminos-condiciones\terminos-condiciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */]])
    ], TerminosCondicionesPage);
    return TerminosCondicionesPage;
}());

var options = {
    title: 'Terminos y Condiciones'
};
//# sourceMappingURL=terminos-condiciones.js.map

/***/ })

});
//# sourceMappingURL=3.js.map