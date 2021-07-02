import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SuperDirective } from './directives/super.directive';
import { AmbMaterialModule } from './modules/amb-material/amb-material.module';
import { CartFilterPipe } from './pipes/cart-filter.pipe';
import { CountPipe } from './pipes/count.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { VatPipe } from './pipes/vat.pipe';
import { SearchModule } from './shared/modules/search/search.module';

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  });

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'formationmoodys'`, () => {
    expect(component.title).toEqual('formationmoodys');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const htmlObj = compiled.querySelector('.mat-toolbar-single-row');
    expect(htmlObj.textContent.toLowerCase()).toContain('formationmoodys');
  });
});
