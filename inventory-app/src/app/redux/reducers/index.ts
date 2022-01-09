import { SET_CURRENT_PRODUCT } from '../types';
import {
    initialState,
    IProductState
} from '../states';
import {
    Reducer
} from 'redux';
import { ProductAction } from '../actions';

export const ProductReducer: Reducer<IProductState> = (
    state: IProductState = initialState,
    action: ProductAction
) =>{
    switch (action.type) {
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
