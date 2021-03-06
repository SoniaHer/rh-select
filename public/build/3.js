webpackJsonp([3],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaybackPageModule", function() { return VideoPlaybackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_playback__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoPlaybackPageModule = (function () {
    function VideoPlaybackPageModule() {
    }
    VideoPlaybackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video_playback__["a" /* VideoPlaybackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video_playback__["a" /* VideoPlaybackPage */]),
            ],
        })
    ], VideoPlaybackPageModule);
    return VideoPlaybackPageModule;
}());

//# sourceMappingURL=video-playback.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlaybackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoPlaybackPage = (function () {
    function VideoPlaybackPage(viewCtrl, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.showControls = false;
        this.isPlaying = false;
    }
    VideoPlaybackPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad VideoPlaybackPage");
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Loading..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.playPause();
            _this.showVideoControls();
        }, 2000);
    };
    VideoPlaybackPage.prototype.showVideoControls = function () {
        var _this = this;
        if (!this.showControls) {
            this.showControls = true;
            setTimeout(function () {
                _this.showControls = false;
            }, 5000);
        }
    };
    VideoPlaybackPage.prototype.playPause = function () {
        var video = document.getElementById("video");
        console.log(video);
        if (video) {
            if (this.isPlaying) {
                video.pause();
            }
            else {
                video.play();
            }
            this.isPlaying = !this.isPlaying;
        }
    };
    VideoPlaybackPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    VideoPlaybackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-video-playback",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\video-playback\video-playback.html"*/'<ion-content class="no-scroll" padding text-center>\n\n  <div>\n\n    <video id="video" (tap)="showVideoControls()">\n\n      <source src="https://firebasestorage.googleapis.com/v0/b/testytest-7bef1.appspot.com/o/Black%20Lightning%20_%20Series%20Trailer%20_%20The%20CW.mp4?alt=media&token=ee3f79b7-c716-4dca-9eea-23fa51a78e7f">\n\n    </video>\n\n  </div> \n\n\n\n  <ion-row style="height: 8%;" *ngIf="showControls">\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite" (click)="playPause()">\n\n        <ion-icon name=\'md-play\' *ngIf="!isPlaying"></ion-icon>\n\n        <ion-icon name=\'md-pause\' *ngIf="isPlaying"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-8></ion-col>\n\n\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite" (cick)="goBack()">\n\n        <ion-icon name=\'md-arrow-round-back\'></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row style="height: 10%;" *ngIf="showControls">\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite">\n\n        <ion-icon name=\'md-refresh\'></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row style="height: 40%;" *ngIf="showControls">\n\n    <ion-col col-8></ion-col>\n\n\n\n    <ion-col col-4>\n\n      <p class="title">Black Lightning</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row style="height: 10%;" *ngIf="showControls">\n\n    <ion-col col-10></ion-col>\n\n\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite">\n\n        <ion-icon name=\'logo-rss\'></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row style="height: 10%;" *ngIf="showControls">\n\n    <ion-col col-10></ion-col>\n\n\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite">\n\n        <ion-icon name=\'md-albums\'></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row style="height: 10%;" *ngIf="showControls">\n\n    <ion-col col-2>\n\n      <p>02:53</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-8></ion-col>\n\n\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite">\n\n          <ion-icon name=\'md-paper\'></ion-icon>\n\n        </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row style="height: 10%;" *ngIf="showControls">\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite">\n\n        <ion-icon name=\'md-expand\'></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-8></ion-col>\n\n\n\n    <ion-col col-2>\n\n      <button ion-button clear color="netflixWhite">\n\n        <ion-icon name=\'md-volume-up\'></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\video-playback\video-playback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], VideoPlaybackPage);
    return VideoPlaybackPage;
}());

//# sourceMappingURL=video-playback.js.map

/***/ })

});
//# sourceMappingURL=3.js.map