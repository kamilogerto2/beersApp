import { Injectable } from '@angular/core';
import { sortTypesEnum } from '../enum/sortTypes.enum';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  private _currentSort = sortTypesEnum.name;

  constructor() {}

  set currentSort(sort: sortTypesEnum) {
    this._currentSort = sort;
  }

  get currentSort() {
    return this._currentSort;
  }
}
