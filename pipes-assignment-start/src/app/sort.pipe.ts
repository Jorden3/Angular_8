import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: [], propName: string): any {

    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      }
      return -1;
    });
  }

}
