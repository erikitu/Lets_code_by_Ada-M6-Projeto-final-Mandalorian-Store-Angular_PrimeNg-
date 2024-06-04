import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  public product:ProductType | null = null

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router,
    private _productService: ProductService
    ){}

  ngOnInit(){
    const id = this._route.snapshot.paramMap.get('id')
    if(id) {
      this._productService.getProduct(id).subscribe({
        next: res =>this.product = res,
        error: _ => this._router.navigate([''])
      })   
    }


  }
}
