import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BasketPage } from '../pages/basket/basket';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsByCategoryPage } from '../pages/products-by-category/products-by-category';
import { ProductDetailsPage  } from '../pages/product-details/product-details';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    ProductsByCategoryPage ,
    ProductDetailsPage  ,
    BasketPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [

    MyApp,
    HomePage,
    ProductsByCategoryPage,
    BasketPage,ProductDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
