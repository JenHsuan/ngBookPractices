import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import { IProductState } from '../ngrx/states';
import { Observable } from 'rxjs';
import {
  SetCurrentProduct,
  FetchProductsStart
} from '../ngrx/actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  appProduct: Observable<IProductState>

  constructor(private store: Store<{'appProduct': IProductState}>) {
    this.appProduct = this.store.select('appProduct')
  }
  ngOnInit(): void {
    this.store.dispatch(new FetchProductsStart());
  }

  clicked(product: Product): void {
    this.store.dispatch(new SetCurrentProduct(product))
  }
}
