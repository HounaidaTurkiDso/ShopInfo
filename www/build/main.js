webpackJsonp([3],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket_basket__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(55);
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
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(appservice, navCtrl, navParams, modalCtrl) {
        this.appservice = appservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.product = this.navParams.get("product");
        console.log(this.product);
    }
    ProductDetailsPage.prototype.ngOnInit = function () {
        this.cart = this.appservice.getCart();
        this.cartItemCount = this.appservice.getCartItemCount();
        console.log(this.cartItemCount);
    };
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    ProductDetailsPage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__basket_basket__["a" /* BasketPage */]).present();
    };
    ProductDetailsPage.prototype.addToCart = function (product) {
        this.appservice.addProductCart(product);
        console.log(this.cart);
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\product-details\product-details.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title> {{product.name}} </ion-title>\n      <ion-buttons end>\n\n          <button ion-button icon-only (click)="openCart()">\n            <ion-badge *ngIf="cart.length >0">{{cart.length}}</ion-badge>\n            <ion-icon name="cart"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content>\n\n\n\n    <ion-card>\n      <ion-slides  >\n          <img src={{product.img}} width="50px"/>\n      </ion-slides>\n\n      <ion-card-content>\n        <ion-card-title>\n          {{product.name}}\n        </ion-card-title>\n\n        <p [innerHTML]="product.description"></p>\n\n      </ion-card-content>\n\n\n    </ion-card>\n\n\n\n\n\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <button ion-button icon-left block outline color="light" (click)="addToCart(product)">\n        <ion-icon name="basket"></ion-icon>\n        Ajouter au panier\n      </button>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\product-details\product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basket_basket__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service__ = __webpack_require__(55);
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
 * Generated class for the ProductsByCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsByCategoryPage = /** @class */ (function () {
    function ProductsByCategoryPage(appservice, navCtrl, navParams, modalCtrl) {
        this.appservice = appservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.searchTerm = "";
        this.cart = [];
        this.products = this.navParams.get("product");
        console.log(this.products);
    }
    ProductsByCategoryPage.prototype.ngOnInit = function () {
        this.cart = this.appservice.getCart();
    };
    ProductsByCategoryPage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__basket_basket__["a" /* BasketPage */]).present();
    };
    ProductsByCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsByCategoryPage');
    };
    ProductsByCategoryPage.prototype.openProductDetailPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    ProductsByCategoryPage.prototype.getItems = function (searchTerm) {
        return this.products.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ProductsByCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products-by-category',template:/*ion-inline-start:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\products-by-category\products-by-category.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Produits </ion-title>\n    <ion-buttons end>\n\n\n        <button ion-button icon-only (click)="openCart()">\n          <ion-badge *ngIf="cart.length >0">{{cart.length}}</ion-badge>\n          <ion-icon name="cart"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n  <ion-content no-padding>\n\n\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col col-6  *ngFor="let product of products">\n          <ion-card>\n            <ion-chip color="primary" style="position: absolute; right: 20px; top: 20px;">\n              <ion-label>{{product.promo}}</ion-label>\n            </ion-chip>\n            <img src={{product.img}} width="50px;" height="70px" (click)="openProductDetailPage(product)" no-margin/>\n            <div padding>\n              <h2>{{product.name}}</h2>\n              <h4> {{product.price}} TND</h4>\n            </div>\n          </ion-card>\n        </ion-col>\n\n\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\products-by-category\products-by-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ProductsByCategoryPage);
    return ProductsByCategoryPage;
}());

//# sourceMappingURL=products-by-category.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/basket/basket.module": [
		675,
		2
	],
	"../pages/product-details/product-details.module": [
		676,
		1
	],
	"../pages/products-by-category/products-by-category.module": [
		677,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_by_category_products_by_category__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basket_basket__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(appservice, navCtrl, modalCtrl) {
        this.appservice = appservice;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.items = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.cart = this.appservice.getCart();
        this.items = this.appservice.getProducts();
    };
    HomePage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__basket_basket__["a" /* BasketPage */]).present();
    };
    HomePage.prototype.addToCart = function (product) {
        this.appservice.addProduct(product);
    };
    // openCart() {
    //   this.navCtrl.push('Cart')
    // }
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_by_category_products_by_category__["a" /* ProductsByCategoryPage */], { "product": product });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openCart()">\n        <ion-badge *ngIf="cart.length >0">{{cart.length}}</ion-badge>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager class="featureSlider">\n    <ion-slide style="background-image: url(\'assets/imgs/TopDownLaptop.jpeg\'); background-position: center center; background-size: cover;">\n\n    </ion-slide>\n\n    <ion-slide style="background-image: url(\'assets/imgs/AppleWorkplace.jpeg\'); background-position: center center; background-size: cover;">\n\n    </ion-slide>\n\n    <ion-slide style="background-image: url(\'assets/imgs/panier.jpg\'); background-position: center center; background-size: cover;">\n      <button ion-button style="right: 20px; bottom: 15%; position: absolute;">Shop Now</button>\n    </ion-slide>\n  </ion-slides>\n\n\n\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col col-6 *ngFor="let item of items ">\n          <ion-card >\n            <ion-chip *ngIf="item.id==1"color="primary" style="position: absolute; right: 2px; top: 2px;">\n              <ion-label>20% Off</ion-label>\n            </ion-chip>\n            <img src={{item.img}} width="50" height="70"no-margin (click)=" openProductPage(item.products)"/>\n            <button style="margin: 0;" ion-button full color="primary" (click)=" openProductPage(item.products)">{{item.category}}</button>\n          </ion-card>\n        </ion-col>\n\n\n\n\n      </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_basket_basket__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_products_by_category_products_by_category__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_product_details_product_details__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_basket_basket__["a" /* BasketPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/basket/basket.module#BasketPageModule', name: 'BasketPage', segment: 'basket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products-by-category/products-by-category.module#ProductsByCategoryPageModule', name: 'ProductsByCategoryPage', segment: 'products-by-category', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_basket_basket__["a" /* BasketPage */], __WEBPACK_IMPORTED_MODULE_9__pages_product_details_product_details__["a" /* ProductDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasketPage = /** @class */ (function () {
    function BasketPage(navCtrl, navParams, appservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appservice = appservice;
        // cart: Product[] = [];
        this.selectedItems = [];
        this.total = 0;
    }
    BasketPage.prototype.ngOnInit = function () {
        this.selectedItems = this.appservice.getCart();
        /*
            let items = this.appservice.getCart();
           let selected = {};
        
            for (let obj of items) {
              if (selected[obj.id]) {
        
                selected[obj.id].count++;
        
              } else {
        
                selected[obj.id] = { ...obj, count: 1 };
              }
        
            }
        
            this.selectedItems = Object.keys(selected).map(key => selected[key])
            console.log('items:', this.selectedItems);
        
            this.total = this.selectedItems.reduce((a, b) => a + (b.amount * b.price), 0);*/
    };
    BasketPage.prototype.goBack = function () {
        this.navCtrl.pop();
        //  this.viewCtrl.dismiss();
    };
    BasketPage.prototype.getTotal = function () {
        return this.selectedItems.reduce(function (i, j) { return i + j.price * j.amount; }, 0);
    };
    BasketPage.prototype.increaseCartItem = function (product) {
        this.appservice.addProductCart(product);
        //console.log(product)
    };
    BasketPage.prototype.decreaseCartItem = function (product) {
        this.appservice.decreaseProduct(product);
        console.log(this.selectedItems);
    };
    BasketPage.prototype.removeCartItem = function (product) {
        this.appservice.removeProduct(product);
    };
    BasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket',template:/*ion-inline-start:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\basket\basket.html"*/'<ion-header>\n\n      <ion-navbar hideBackButton>\n        <ion-buttons left>\n            <button ion-button (click)="goBack()">\n                <ion-icon  color="light" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Panier</ion-title>\n     </ion-navbar>\n  </ion-header>\n\n\n<ion-content no-padding *ngIf="selectedItems.length != 0">\n\n\n  <ion-card style="margin: 0; width: 100%;">\n    <ion-list  *ngFor="let item of selectedItems">\n      <ion-item>\n       <ion-row>\n          <ion-thumbnail item-start>\n              <img src={{item.img}}>\n            </ion-thumbnail>\n            <ion-col>  <h2>{{item.name}}</h2>\n\n              <h1>{{item.price*item.amount}} TND</h1></ion-col>\n\n\n\n       </ion-row>\n       <ion-item-divider>\n\n        </ion-item-divider>\n       <ion-row>\n         <ion-col>\n          <ion-icon   name="trash"  class="delete" (click)="removeCartItem(item)"></ion-icon>  <span class="incCount">RETIRER</span>\n        </ion-col>\n          <ion-col  float-right >\n\n              <ion-icon  float-right   class="incPlus" name="add-circle" (click)="increaseCartItem(item)" ></ion-icon>\n\n\n            <span  float-right  class="incCount">{{item.amount}}</span>\n            <ion-icon  *ngIf="item.amount == 1" float-right class="incMinus" name="remove-circle"  ></ion-icon>\n\n            <ion-icon *ngIf="item.amount != 1"  float-right class="incMinus" name="remove-circle"  (click)="decreaseCartItem(item)"></ion-icon>\n          </ion-col>\n\n\n       </ion-row>\n\n\n\n      </ion-item>\n\n\n\n    </ion-list>\n  </ion-card>\n\n  <ion-card style="margin: 0; width: 100%;">\n\n      <ion-item>\n          <p>Total: </p>\n          <ion-note item-end><b>{{getTotal()}} TND</b></ion-note>\n        </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n\n<ion-content class="paddingcard" *ngIf="selectedItems.length === 0">\n\n\n  <ion-card style="margin: 0; width: 100%;">\n    <h1>Vous n\'avez pas d\'articles dans le panier </h1>\n  </ion-card>\n\n\n\n</ion-content>\n<ion-footer *ngIf="selectedItems.length == 0">\n    <ion-toolbar>\n      <button ion-button icon-left block outline color="light" (click)="goBack()" >\n      CONTINUER VOS ACHATS\n      </button>\n    </ion-toolbar>\n  </ion-footer>\n\n<ion-footer *ngIf="selectedItems.length != 0">\n  <ion-toolbar>\n    <button ion-button icon-left block outline color="light" >\n      <ion-icon name="checkmark"></ion-icon>\n      Valider la Commande\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\mobile-project\IonicProduct\src\pages\basket\basket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */]])
    ], BasketPage);
    return BasketPage;
}());

//# sourceMappingURL=basket.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.data = [
            { id: 1,
                category: 'Smartphone',
                img: "assets/imgs/products/galaxya3.jpg",
                products: [{ id: 0, name: "GalaxyA30", price: 80, img: "assets/imgs/products/galaxya3.jpg", promo: "20% Off", description: "nouveau", amount: 1 },
                    { id: 1, name: "Y6 Prime", price: 100, img: "assets/imgs/products/y6prime.jpg", promo: "20% Off", description: "nouveau", amount: 1, },
                    { id: 2, name: "A5", price: 150, img: "assets/imgs/products/a5.jpg", promo: "20% Off", description: "nouveau", amount: 1 }
                ] },
            { id: 2,
                category: 'Acc Téléphoniques',
                img: "assets/imgs/products/acc.jpg",
                products: [{ id: 3, name: "Power Bank", price: 80, img: "assets/imgs/products/powerbank.jpg", promo: "20% Off", description: "nouveau", amount: 1 },
                    { id: 4, name: "Chargeur Sans Fil", price: 106, img: "assets/imgs/products/chargeursansfil.jpg", promo: "15% Off", description: "nouveau", amount: 1 },
                    { id: 5, name: "Smart Watch", price: 155, img: "assets/imgs/products/smartwatch.jpg", promo: "20% Off", description: "nouveau", amount: 1 }
                ] },
            { id: 3,
                category: 'Ordinateurs',
                img: "assets/imgs/products/pcdell.jpg",
                products: [{ id: 6, name: "Hp ", price: 80, img: "assets/imgs/products/pchp.jpg", promo: "20% Off", description: "nouveau", amount: 1 },
                    { id: 7, name: "Dell", price: 100, img: "assets/imgs/products/pcdell.jpg", promo: "50% Off", description: "nouveau", amount: 1 },
                    { id: 8, name: "Asus", price: 150, img: "assets/imgs/products/pcasus.jpg", promo: "40% Off", description: "nouveau", amount: 1 }
                ] },
            { id: 4,
                category: 'Tablettes',
                img: "assets/imgs/products/tablettehp.jpg",
                products: [{ id: 6, name: "Hp ", price: 870, img: "assets/imgs/products/tablettehp.jpg", promo: "20% Off", description: "nouveau", amount: 1 },
                    { id: 7, name: "Dell", price: 1000, img: "assets/imgs/products/tablettedell.jpg", promo: "10% Off", description: "nouveau", amount: 1 },
                    { id: 8, name: "Asus", price: 1500, img: "assets/imgs/products/tabletteasus.jpg", promo: "30% Off", description: "nouveau", amount: 1 }
                ] },
        ];
        this.cart = [];
        this.cartItemCount = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](0);
    }
    AppService.prototype.getProducts = function () {
        return this.data;
    };
    AppService.prototype.getCart = function () {
        return this.cart;
    };
    AppService.prototype.getCartItemCount = function () {
        return this.cartItemCount;
    };
    AppService.prototype.addProduct = function (product) {
        this.cart.push(product);
    };
    AppService.prototype.addProductCart = function (product) {
        var added = false;
        try {
            for (var _a = __values(this.cart), _b = _a.next(); !_b.done; _b = _a.next()) {
                var p = _b.value;
                if (p.id === product.id) {
                    p.amount += 1;
                    added = true;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!added) {
            this.cart.push(product);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
        var e_1, _c;
    };
    AppService.prototype.decreaseProduct = function (product) {
        try {
            for (var _a = __values(this.cart.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read(_b.value, 2), index = _c[0], p = _c[1];
                if (p.id === product.id) {
                    p.amount -= 1;
                    if (p.amount == 0) {
                        this.cart.splice(index, 1);
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
        var e_2, _d;
    };
    AppService.prototype.removeProduct = function (product) {
        try {
            for (var _a = __values(this.cart.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read(_b.value, 2), index = _c[0], p = _c[1];
                if (p.id === product.id) {
                    this.cartItemCount.next(this.cartItemCount.value - p.amount);
                    this.cart.splice(index, 1);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _d;
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_basket_basket__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Basket', component: __WEBPACK_IMPORTED_MODULE_5__pages_basket_basket__["a" /* BasketPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\mobile-project\IonicProduct\src\app\app.html"*/'\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\mobile-project\IonicProduct\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map