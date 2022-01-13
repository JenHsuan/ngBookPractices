import {
  Component,
  HostBinding,
  Input
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  template: `
   <img class="product-image" [src]="product ? product.imageUrl : ''">
   `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() product: Product | null;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }
}
