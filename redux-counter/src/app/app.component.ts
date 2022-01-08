import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './store';
import { AppState } from './states';
import { inject } from '@angular/core/testing';
import { increment, decrement } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter?: number;
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.UpdateState());
    this.UpdateState();
  }

  //Update the UI
  UpdateState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  //Redux actions
  Increment() {
    this.store.dispatch(increment());
  }

  Decrement() {
    this.store.dispatch(decrement());
  }
}
