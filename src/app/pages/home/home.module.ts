import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, ComponentsModule, HttpClientModule
  ],
  exports :[
    HomeComponent,
  ],
  providers: []
})
export class HomeModule { }
