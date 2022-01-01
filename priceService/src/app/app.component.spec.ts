import { Product } from './product.model';
import { MockPriceService } from './services/price.service.mock';

describe('Product', () => {
  let product: Product;
  beforeEach(async () => {
    const service = new MockPriceService();
    product = new Product(service, 11);
  });

  describe('price', () => {
    it('it calculated based on the basePrice and the state', () => {
      expect(product.totalPrice('FL')).toBe(11.66);
    });
  })
});
