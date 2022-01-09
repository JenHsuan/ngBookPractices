import { Action, ActionCreator } from 'redux';
import {
    SET_CURRENT_PRODUCT
} from '../types';
import { Product } from 'src/app/product.model';

export interface ProductAction extends Action {
    type: string;
    payload?: any;
}

export const SetCurrentProduct: ActionCreator<Action> = (
    currentProduct: Product
) => ({
    type: SET_CURRENT_PRODUCT,
    payload: currentProduct
});
