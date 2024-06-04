import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() productList: ProductType[] = [];;
  @Output() showProductDetails = new EventEmitter<string>()

  public showDetails(id: string){
    this.showProductDetails.emit(id)
  }
}
