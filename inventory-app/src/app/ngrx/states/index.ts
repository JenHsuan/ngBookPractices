import { Product } from '../../product.model';
export interface IProductState {
    products: Product[];
    currentProduct: Product | null;
}

export const initialState: IProductState = {
    products: [],
    currentProduct: null
};
