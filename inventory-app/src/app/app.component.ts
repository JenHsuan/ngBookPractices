import { Component, Inject } from '@angular/core';
import { Product } from './product.model';
import { IProductState } from './redux/states';
import { AppStore } from './redux/stores';
import { Store } from 'redux';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor(@Inject(AppStore) private store: Store<IProductState>) {
    this.products = [
      new Product(
       'MYSHOES',
       'Black Running Shoes',
       '/assets/images/products/black-shoes.jpg',
       ['Men', 'Shoes', 'Running Shoes'],
       109.99),
      new Product(
       'NEATOJACKET',
       'Blue Jacket',
       '/assets/images/products/blue-jacket.jpg',
       ['Women', 'Apparel', 'Jackets & Vests'],
       238.99),
      new Product(
       'NICEHAT',
       'A Nice Black Hat',
       '/assets/images/products/black-hat.jpg',
       ['Men', 'Accessories', 'Hats'],
       29.99)
    ];
    store.subscribe(() => this.productWasSelected());
  }

  productWasSelected() {
    const state: IProductState = this.store.getState() as IProductState;
    console.log('Product click: ', state.currentProduct)
  }
}
