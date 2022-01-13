import { SET_CURRENT_PRODUCT } from '../types';
import {
    initialState,
    IProductState
} from '../states';
import { SetCurrentProduct } from '../actions';

export const ProductReducer = (
    state: IProductState = initialState,
    action: SetCurrentProduct
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
