import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

import { CartTableComponent } from './cart-table.component';

fdescribe('CartTableComponent', () => {
  let component: CartTableComponent;
  let fixture: ComponentFixture<CartTableComponent>;
  let service: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of products', () => {
    // Arrange
    const nbItems = 3;
    prepareService();

    // Act
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');

    // Assert
    expect(table).toBeTruthy();

    const trList = fixture.nativeElement.querySelectorAll('table tr');
    expect(trList).toBeTruthy();
    expect(trList.length).toBe(nbItems);
  });

  function prepareService() {
    service.cartProducts = generateProducts(3);
  }

  function generateProducts(nb: number): Product[] {
    const table: Product[] = [];

    for (let index = 0; index < nb; index++) {
      table.push({
        id: index,
        price: index + 1,
        title: `title-${index}`
      });
    }

    return table;
  }
});
