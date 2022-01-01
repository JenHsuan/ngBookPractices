import { IPriceService } from "./price-service.interface";

export class MockPriceService implements IPriceService {
    calculateTotalPrice(basePrice: number, state: string) {
        return basePrice;
    }
}
