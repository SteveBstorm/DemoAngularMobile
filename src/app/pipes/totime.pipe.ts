import { Pipe, PipeTransform } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let seconds = value % 60
    let minutes = Math.floor(value/60)
    return `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
  }

}
