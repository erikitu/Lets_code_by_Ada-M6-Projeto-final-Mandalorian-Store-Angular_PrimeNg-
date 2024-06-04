import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    CardModule,
    InputTextModule, 
  ],
  exports :[
    ProductListComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
