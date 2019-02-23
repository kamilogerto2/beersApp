import { Injectable } from '@angular/core';
import { sortTypesEnum } from '../enum/sortTypes.enum';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  private _currentSort = sortTypesEnum.name;
  sortChange = new Subject();

  set currentSort(sort: sortTypesEnum) {
    this._currentSort = sort;
    this.sortChange.next(this._currentSort);
  }

  get currentSort() {
    return this._currentSort;
  }

  comparator(a, b) {
    console.log(this._currentSort);
    const valueA = this._currentSort === sortTypesEnum.price ? parseFloat(a[this._currentSort]) : a[this._currentSort];
    const valueB = this._currentSort === sortTypesEnum.price ? parseFloat(b[this._currentSort]) : b[this._currentSort];

    if (valueA < valueB) {
      return -1;
    }

    if (valueA > valueB) {
      return 1;
    }

    return 0;
  }

}
