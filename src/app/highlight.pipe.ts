import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value == 0) {
      return 'male';
    } else if (value == 1) {
      return 'female';
    } else {
      return 'none';
    }
  }
}
