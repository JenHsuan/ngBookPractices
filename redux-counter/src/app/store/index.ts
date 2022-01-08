import { InjectionToken } from '@angular/core';
import {
    createStore,
    compose,
    StoreEnhancer,
    Store
} from 'redux';
import { AppState } from '../states';
import {
    counterReducer as reducer
} from '../reducers';

export const AppStore = new InjectionToken('App.store');
const devtools: StoreEnhancer<AppState> =
    (window as { [key: string]: any })['__REDUX_DEVTOOLS_EXTENSION__'] ?
    (window as { [key: string]: any })['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;


export function createAppStore(): Store<AppState> {
    return createStore(
        reducer,
        compose(devtools)
    )
}

export const appStoreInjectable = [
    { provide: AppStore, useFactory: createAppStore}
]
