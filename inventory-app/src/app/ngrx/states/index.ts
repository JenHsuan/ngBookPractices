import { Product } from '../../product.model';
export interface IProductState {
    products: Product[];
    currentProduct: Product | null;
}

export const initialState: IProductState = {
    products: [
        new Product(
         'MYSHOES',
         'Black Running Shoes',
         '/assets/images/products/black-shoes.jpg',
         ['Men', 'Shoes', 'Running Shoes'],
         109.99),
        new Product(
         'NEATOJACKET',
         'Blue Jacket',
         '/assets/images/products/blue-jacket.jpg',
         ['Women', 'Apparel', 'Jackets & Vests'],
         238.99),
        new Product(
         'NICEHAT',
         'A Nice Black Hat',
         '/assets/images/products/black-hat.jpg',
         ['Men', 'Accessories', 'Hats'],
         29.99)
      ],
    currentProduct: null
};
