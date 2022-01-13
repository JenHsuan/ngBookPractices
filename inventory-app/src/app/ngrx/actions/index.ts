import { Action, ActionCreator } from '@ngrx/store';
import {
    SET_CURRENT_PRODUCT
} from '../types';
import { Product } from 'src/app/product.model';

export class SetCurrentProduct implements Action {
    readonly type = SET_CURRENT_PRODUCT;
    constructor(public payload: Product) {}
}

// export class SetCurrentProduct implements Action {
//     readonly type = SET_CURRENT_PRODUCT;
//     payload: Product;
// }
//     currentProduct: Product
// ) => ({
//     type: SET_CURRENT_PRODUCT,
//     payload: currentProduct
// });
