import { ActionReducerMap } from "@ngrx/store";
import { ProductReducer } from "../reducers";
import { IProductState } from "../states";
import { SetCurrentProduct } from '../actions'

interface ProducteState {
    appProduct: IProductState
}

export const AppReducer: ActionReducerMap<ProducteState, SetCurrentProduct> = {
    appProduct: ProductReducer
}
