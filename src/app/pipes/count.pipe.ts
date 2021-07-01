import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
  pure: false
})
export class CountPipe implements PipeTransform {

  transform(items: any[]): number {
    return items && items.length || 0
  }

}
