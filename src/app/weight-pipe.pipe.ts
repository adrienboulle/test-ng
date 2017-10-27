import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightPipe',
})
export class WeightPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const floored = Math.floor(value / 1000);
    let rest = (value - 100 * floored).toString() + '0000';
    rest = rest.substr(0, 3);

    return floored + '.' + rest + ' kg';
  }
}
