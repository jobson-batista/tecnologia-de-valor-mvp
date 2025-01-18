import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number | string): string {

    if (!value && value !== 0) {
      return '';
    }

    let numStr = value.toString();

    let formattedValue = parseFloat(numStr).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return formattedValue;

  }

}
