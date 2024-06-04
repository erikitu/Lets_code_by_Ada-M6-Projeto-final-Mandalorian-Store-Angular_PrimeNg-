import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ProductListMock } from 'src/app/mocks/product-list.mock';
import { ProductType } from 'src/app/types/product.type';
import { HomeService } from './home.service';
import { productFilterType } from 'src/app/types/productFilter.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productList: ProductType[] = [];

  constructor(
    private _productService: ProductService,
    private _router: Router
    ) {
    this.filterProductsByName();
  }

  public filterProductsByName(productFilter?: productFilterType){
    //this.productList = this._homeService.getProductList(name);
    this._productService
    .getProductList(productFilter)
    .subscribe(resp => this.productList = resp)

  }

  public getProductDetails(id: string){
    this._router.navigate([`/details/${id}`])
   // this._homeService.getProduct(id).subscribe(resp => console.log(resp))
  }

}
