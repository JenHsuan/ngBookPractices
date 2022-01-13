import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from './product.model';
import { AppReducer } from './ngrx/stores';
import { Observable } from 'rxjs';
import { IProductState } from './ngrx/states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //appProduct: Observable<IProductState>
  //products: Product[];
  constructor(private store: Store<{'appProduct': IProductState}>) {
    // this.products = [
    //   new Product(
    //    'MYSHOES',
    //    'Black Running Shoes',
    //    '/assets/images/products/black-shoes.jpg',
    //    ['Men', 'Shoes', 'Running Shoes'],
    //    109.99),
    //   new Product(
    //    'NEATOJACKET',
    //    'Blue Jacket',
    //    '/assets/images/products/blue-jacket.jpg',
    //    ['Women', 'Apparel', 'Jackets & Vests'],
    //    238.99),
    //   new Product(
    //    'NICEHAT',
    //    'A Nice Black Hat',
    //    '/assets/images/products/black-hat.jpg',
    //    ['Men', 'Accessories', 'Hats'],
    //    29.99)
    // ];
  }

  productWasSelected(product: Product) {
    console.log('Product click: ', product)
  }
}
