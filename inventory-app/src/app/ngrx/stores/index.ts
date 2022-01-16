import { ActionReducerMap } from "@ngrx/store";
import { ProductReducer } from "../reducers";
import { IProductState } from "../states";
import {
    SetCurrentProduct,
    FetchProductsSuccess
} from '../actions'

interface ProducteState {
    appProduct: IProductState
}

export const AppReducer: ActionReducerMap<
        ProducteState,
        SetCurrentProduct | FetchProductsSuccess > = {
    appProduct: ProductReducer
}
