import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item/search-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchItemComponent
  ]
})
export class SearchModule { }
