import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Formation AMBIENT-IT';

  cartProducts: Product[] = [];

  travailDePuisComposant() {
    console.warn('je suis appelée');
  }

  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts;

    // Production => aka : émission
    const observable$ = new Observable(observer => {
      console.info('construction obs');
      observer.next(Math.random());
      // observer.next(2);

      // setTimeout(() => {
      //   console.info('ah que johny !!');
      //   observer.next('AHHHH QUE JOHNY !');
      //   console.info('ah que johny !! apres');
      // }, 150);

      // for (let index = 0; index < 10; index++) {
      //   observer.next('for' + index);
      // }

      observer.complete();

      // setTimeout(() => {
      //   observer.next(12);
      // }, 2000);

    });

    // Consommation => aka : souscription
    const subscription = observable$.subscribe(item => {
      console.info('obs => ', item);
      console.info('obs2 => ', item);
    });

    observable$.subscribe(item => {
      console.info('en second => ', item);
      console.info('en second => ', item);
    });

    subscription.unsubscribe();
  }

  constructor(private cartService: CartService) {}
}
