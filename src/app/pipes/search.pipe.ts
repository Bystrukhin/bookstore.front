import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    // transform(items: any[], searchText: string): any[] {
    //     if (!items) return [];
    //     if (!searchText) return items;
    //     searchText = searchText.toLowerCase();
    //     return items.filter( it => {
    //         return it.toLowerCase().includes(searchText);
    //     });
    // }

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

    // transform(items: any[], titleSearch: string[], genreSearch: string): any[] {
    //     if (items && typeof items === 'object') {
    //         let resultArray = [];
    //         return items.filter(item => {
    //             if (titleSearch && titleSearch.length !== 0) {
    //                 for (let item of items) {
    //                     if (item.title != null && item.title.match(new RegExp('' + titleSearch, 'i'))) {
    //                         resultArray.push(item);
    //                     }
    //                 }
    //             }
    //             if (genreSearch) {
    //                 return item.genre_id === genreSearch;
    //             }
    //             return true;
    //         });
    //     } else {
    //         return items;
    //     }
    // }

}
