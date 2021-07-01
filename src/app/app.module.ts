import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { SuperDirective } from './directives/super.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmbMaterialModule } from './modules/amb-material/amb-material.module';
import { VatPipe } from './pipes/vat.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CountPipe } from './pipes/count.pipe';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartFilterPipe } from './pipes/cart-filter.pipe';
import { CartService } from './services/cart.service';
import { SearchModule } from './shared/modules/search/search.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuperDirective,
    VatPipe,
    SearchPipe,
    CountPipe,
    ProductListComponent,
    CartComponent,
    CartFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AmbMaterialModule,
    FormsModule,
    SearchModule
  ],
  providers: [
    VatPipe,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
