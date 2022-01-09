import { Product } from '../../product.model';
export interface IProductState {
    currentProduct: Product | null;
}

export const initialState: IProductState = {
    currentProduct: null
};
