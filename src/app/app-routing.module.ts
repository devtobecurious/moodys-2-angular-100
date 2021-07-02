import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartTableComponent } from './features/cart/cart-table/cart-table.component';

const routes: Routes = [{
  path: 'panier',
  component: CartTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
