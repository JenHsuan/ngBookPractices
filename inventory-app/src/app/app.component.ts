import { Component, Inject } from '@angular/core';
import { IProductState } from './redux/states';
import { AppStore } from './redux/stores';
import { Store } from 'redux';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(AppStore) private store: Store<IProductState>) {
    store.subscribe(() => this.productWasSelected());
  }

  productWasSelected() {
    const state: IProductState = this.store.getState() as IProductState;
    console.log('Product click: ', state.currentProduct)
  }
}
