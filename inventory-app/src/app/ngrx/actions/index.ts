import { Action, ActionCreator } from '@ngrx/store';
import {
    SET_CURRENT_PRODUCT,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS
} from '../types';
import {
    Product
} from 'src/app/product.model';

export class SetCurrentProduct implements Action {
    readonly type = SET_CURRENT_PRODUCT;
    constructor(public payload: Product) {}
}

export class FetchProductsStart implements Action {
    readonly type = FETCH_PRODUCTS_START;
    constructor(){}
}

export class FetchProductsSuccess implements Action {
    readonly type = FETCH_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){}
}
