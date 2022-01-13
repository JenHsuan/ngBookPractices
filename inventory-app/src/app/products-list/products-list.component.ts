import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import { IProductState } from '../ngrx/states';
import { Observable } from 'rxjs';
import { SetCurrentProduct } from '../ngrx/actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  appProduct: Observable<IProductState>

  constructor(private store: Store<{'appProduct': IProductState}>) {
    this.appProduct = this.store.select('appProduct');
  }

  clicked(product: Product): void {
    this.store.dispatch(new SetCurrentProduct(product))
  }
}
