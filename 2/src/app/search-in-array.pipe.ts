import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchInArray',
  standalone: true
})
export class SearchInArrayPipe implements PipeTransform {

  transform(value: number, array: number[]): boolean {
    return array.includes(value);
  }

}
