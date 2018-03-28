import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: any[], args: string[]): any[] {
        if (typeof items === 'object') {
            let resultArray = [];
            if (args.length === 0) {
                resultArray = items;
            } else {
                for (const item of items) {
                    if (item.title != null && item.title.match(new RegExp('' + args, 'i'))) {
                        resultArray.push(item);
                    }
                    if (item.publisher_name != null && item.publisher_name.match(new RegExp('' + args, 'i'))) {
                        resultArray.push(item);
                    }
                    if (item.last_name != null && item.last_name.match(new RegExp('' + args, 'i'))) {
                        resultArray.push(item);
                    }
                    if (item.first_name != null && item.first_name.match(new RegExp('' + args, 'i'))) {
                        resultArray.push(item);
                    }
                }
            }
            return resultArray;
        } else {
            return null;
        }
    }

}
