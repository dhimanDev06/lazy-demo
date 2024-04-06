import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SharedModule } from '../shared/shared.module';
import { AgGridAngular } from 'ag-grid-angular';



@NgModule({
  declarations: [
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    AgGridAngular
  ]
})
export class ShopModule { }
