import { InjectionToken } from '@angular/core';
import {
    createStore,
    compose,
    StoreEnhancer,
    Store
} from 'redux';
import { IProductState } from '../states';
import {
    ProductReducer as reducer
} from '../reducers';

export const AppStore = new InjectionToken('App.store');
const devtools: StoreEnhancer<IProductState> =
    (window as { [key: string]: any })['__REDUX_DEVTOOLS_EXTENSION__'] ?
    (window as { [key: string]: any })['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;

export function createAppStore(): Store<IProductState> {
    return createStore(
        reducer,
        compose(devtools)
    )
}

export const AppStoreInjectable = [
    { provide: AppStore, useFactory: createAppStore}
]
