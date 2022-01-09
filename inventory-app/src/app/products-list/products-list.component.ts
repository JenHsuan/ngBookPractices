import {
  Component,
  EventEmitter,
  Input,
  Output,
  Inject
} from '@angular/core';
import { Product } from '../product.model';
import { SetCurrentProduct } from '../redux/actions';
import { IProductState } from '../redux/states';
import { AppStore } from '../redux/stores';
import { Store } from 'redux';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  productList: Product[];

  constructor(@Inject(AppStore) private store: Store<IProductState>) {
    const state: IProductState = this.store.getState() as IProductState;
    this.productList = state.products;
  }

  clicked(product: Product): void {
    this.store.dispatch(SetCurrentProduct(product));
  }

  isSelected(product: Product): boolean {
    const state: IProductState = this.store.getState() as IProductState;
    if (!product || !state.currentProduct) {
      return false;
    }

    return product.sku === state.currentProduct.sku;
  }

}
