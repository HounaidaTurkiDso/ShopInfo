import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {  ProductDetailsPage } from '../product-details/product-details';

import {  BasketPage } from '../basket/basket';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the ProductsByCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategoryPage {
  public searchTerm: string = "";

  products :any;
  cart = [];
cartItemCount: BehaviorSubject<number>;
  constructor(private appservice: AppService,  public navCtrl: NavController, public navParams: NavParams , public modalCtrl: ModalController) {
    this.products = this.navParams.get("product");
    console.log(this.products);
  }

  ngOnInit() {

    this.cart = this.appservice.getCart();

  }
  openCart(){

    this.modalCtrl.create(BasketPage).present();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategoryPage');
  }
  openProductDetailPage(product){
    this.navCtrl.push(ProductDetailsPage, {"product": product} );
  }

  getItems(searchTerm) {

    return this.products.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });


  }
}
