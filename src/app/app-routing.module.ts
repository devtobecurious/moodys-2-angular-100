import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { CartTableComponent } from './features/cart/cart-table/cart-table.component';

const routes: Routes = [
  {
    path: 'panier',
    component: CartTableComponent
  },
  {
    path: 'ajout-produit',
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
