import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AppService } from '../../app/app.service';
import {  ProductsByCategoryPage } from '../products-by-category/products-by-category';
import {  BasketPage } from '../basket/basket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cart = [];
  items = [];
  constructor(private appservice: AppService,   public navCtrl: NavController,public modalCtrl: ModalController) { }
  ngOnInit() {
    this.cart = this.appservice.getCart();
    this.items = this.appservice.getProducts();
  }
  openCart(){

    this.modalCtrl.create(BasketPage).present();

  }
  addToCart(product) {

    this.appservice.addProduct(product);
  }
  // openCart() {
  //   this.navCtrl.push('Cart')

  // }





  openProductPage(product){
    this.navCtrl.push(ProductsByCategoryPage, {"product": product} );
  }

}
