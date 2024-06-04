import { Component, EventEmitter, Output } from '@angular/core';
import { productFilterType } from 'src/app/types/productFilter.type';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  public filteredValue: string =''
  public sortOrder: string ='DESC'
  public isAvailable: string = ''



  @Output() filterEmitter: EventEmitter<productFilterType> = new EventEmitter<productFilterType>();

  public searchProductByName(){
    const productFilter: productFilterType = {
      search: this.filteredValue,
      sort: this.sortOrder,
      orderBy: 'name'
    }
    if(this.isAvailable.trim().length > 0){
      productFilter.isAvailable = this.isAvailable === 'true'
    }

    this.filterEmitter.emit(productFilter)
  }
  public clearFilter(){
    // this.filteredValue = '';
    // this.filterEmitter.emit(this.filteredValue)
  }
}
