import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe',
})
export class PricePipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const floored = Math.floor(value / 100);
    let rest = (value - 100 * floored).toString() + '0000';
    rest = rest.substr(0, 2);

    return floored + '.' + rest + ' €';
  }
}
