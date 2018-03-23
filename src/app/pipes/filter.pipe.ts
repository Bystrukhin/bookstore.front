import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {

    transform(items: any[], value: string, field: string): any[] {
        if (!items) {
          return [];
        }
        return items.filter(it => it[field] == value);
    }
}
