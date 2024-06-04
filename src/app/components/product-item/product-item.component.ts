import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: ProductType;
  @Output() detailProduct = new EventEmitter<string>();

  public clickHandler(){
    this.detailProduct.emit(this.product.id)
  }

}
