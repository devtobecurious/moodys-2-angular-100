import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {

  transform(value: number, rate: number = 0.2): number {
    return value + value * rate
  }

}
