import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product ,DataP ,  AppService } from '../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

 // cart: Product[] = [];
  selectedItems : Product[] = [];
  total = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private appservice: AppService ) {
  }
  ngOnInit() {
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
  }

  goBack() {
    this.navCtrl.pop();
  //  this.viewCtrl.dismiss();
  }
  getTotal() {
    return this.selectedItems.reduce((i, j) => i + j.price * j.amount, 0);
  }


  increaseCartItem(product) {
    this.appservice.addProductCart(product);
    //console.log(product)
  }
  decreaseCartItem(product) {
    this.appservice.decreaseProduct(product);
     console.log(this.selectedItems);
    }

  removeCartItem(product) {
  this.appservice.removeProduct(product);
  }
}
