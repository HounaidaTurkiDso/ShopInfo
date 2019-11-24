import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {  BasketPage } from '../basket/basket';
import { AppService } from '../../app/app.service';
import { BehaviorSubject } from 'rxjs';


/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage implements OnInit {
product : any ;
cart = [];
cartItemCount: BehaviorSubject<number>;
  constructor(private appservice: AppService, public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.product = this.navParams.get("product");
    console.log(this.product);
  }
  ngOnInit() {
    this.cart = this.appservice.getCart();
    this.cartItemCount = this.appservice.getCartItemCount();
console.log(this.cartItemCount);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  openCart(){

    this.modalCtrl.create(BasketPage).present();

  }
  addToCart(product) {

    this.appservice.addProductCart(product);
   console.log(this.cart) ;
  }
}
