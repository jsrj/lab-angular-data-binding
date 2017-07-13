import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: String): any {

    if (!value) {
      return [];
    }
    if (!searchTerm) {
      return value;
    }

    const matchedResults = [];
    searchTerm = searchTerm.toLowerCase();

    value.forEach((oneItem) => {
      if (oneItem.name.toLowerCase().includes(searchTerm)) {
        matchedResults.push(oneItem);
      }
    });

    return matchedResults;
  }

}
