import {
    SET_CURRENT_PRODUCT,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS
} from '../types';
import {
    initialState,
    IProductState
} from '../states';
import {
    SetCurrentProduct,
    FetchProductsSuccess
} from '../actions';

export const ProductReducer = (
    state: IProductState = initialState,
    action: SetCurrentProduct | FetchProductsSuccess
) =>{
    switch (action.type) {
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
