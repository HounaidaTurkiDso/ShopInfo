import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product {
    id: number, name: string , price :number , img:string , promo:string ,description : string ,  amount:number ;
}
export  interface DataP {
  id: number;
  category: string;
  img: string;
  products :Product[]
}

@Injectable()
export class AppService {
 data: DataP[] =[
{id:1 ,
category :'Smartphone',
img :"assets/imgs/products/galaxya3.jpg",
products :[{id:0 , name :"GalaxyA30",price:80 ,img :"assets/imgs/products/galaxya3.jpg",promo:"20% Off",description:"nouveau",amount:1},
{id:1 , name :"Y6 Prime",price:100,img :"assets/imgs/products/y6prime.jpg",promo:"20% Off",description:"nouveau",amount:1,},
{id:2 , name :"A5",price:150 ,img :"assets/imgs/products/a5.jpg",promo:"20% Off",description:"nouveau",amount:1}

]},

{id:2 ,
  category :'Acc Téléphoniques',
  img :"assets/imgs/products/acc.jpg",
  products :[{id:3 , name :"Power Bank",price:80 ,img :"assets/imgs/products/powerbank.jpg",promo:"20% Off",description:"nouveau",amount:1},
  {id:4 , name :"Chargeur Sans Fil",price:106 ,img :"assets/imgs/products/chargeursansfil.jpg",promo:"15% Off",description:"nouveau",amount:1},
  {id:5 , name :"Smart Watch",price:155 ,img :"assets/imgs/products/smartwatch.jpg",promo:"20% Off",description:"nouveau",amount:1}

  ]},


    {id:3,
      category :'Ordinateurs',
      img :"assets/imgs/products/pcdell.jpg",
      products :[{id:6 , name :"Hp ",price:80 ,img :"assets/imgs/products/pchp.jpg",promo:"20% Off",description:"nouveau",amount:1},
      {id:7 , name :"Dell",price:100,img :"assets/imgs/products/pcdell.jpg",promo:"50% Off",description:"nouveau",amount:1},
      {id:8 , name :"Asus",price:150,img :"assets/imgs/products/pcasus.jpg",promo:"40% Off",description:"nouveau",amount:1}

      ]},
      {id:4,
        category :'Tablettes',
        img :"assets/imgs/products/tablettehp.jpg",
        products :[{id:6 , name :"Hp ",price:870 ,img :"assets/imgs/products/tablettehp.jpg" ,promo:"20% Off",description:"nouveau",amount:1},
        {id:7 , name :"Dell",price:1000 ,img :"assets/imgs/products/tablettedell.jpg",promo:"10% Off",description:"nouveau",amount:1},
        {id:8 , name :"Asus",price:1500 ,img :"assets/imgs/products/tabletteasus.jpg",promo:"30% Off",description:"nouveau",amount:1}

        ]},
]
private cart = [];
 cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(){
    return this.data ;
  }
  getCart(){
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product){
    this.cart.push(product);
  }
  addProductCart(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

 decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

}
