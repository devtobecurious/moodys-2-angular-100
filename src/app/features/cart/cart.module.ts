import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartTableComponent } from './cart-table/cart-table.component';



@NgModule({
  declarations: [
    CartTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartTableComponent
  ]
})
export class CartModule { }
