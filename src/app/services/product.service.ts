import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';
import { Observable } from 'rxjs';
import { productFilterType } from '../types/productFilter.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _URL = 'https://mandalorian-store.netlify.app/api'
  constructor(private _http: HttpClient) { }


  public getProductList(
    productFilter?: productFilterType
  ): Observable<ProductType[]>{
    let params = new HttpParams()
    if(productFilter) {
      Object.entries(productFilter).map(([key, value]) =>{
        if((String(value)).trim().length === 0){
          return
        }
        params = params.set(String(key),value)
      })
    }

    return this._http.get<ProductType[]>(`${this._URL}/equipments`, {params})
  }

  
  public getProduct(id: string): Observable<ProductType>{
    return this._http.get<ProductType>(`${this._URL}/equipments/${id}`)
  }

}
