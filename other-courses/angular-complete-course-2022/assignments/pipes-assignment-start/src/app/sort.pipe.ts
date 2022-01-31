import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], key: string, isDesc: boolean): any[] {
    if (value.length === 0 || key.length === 0) {
      return value;
    }

    value.sort((a: any, b: any) => {
      return isDesc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
    })
    return value;
  }

}
