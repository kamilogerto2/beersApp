import { Injectable } from '@angular/core';
import { sortTypesEnum } from '../enum/sortTypes.enum';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  private _currentSort = sortTypesEnum.name;
  private _sortStorageKey = 'beersAppSort';
  sortChange = new Subject();

  constructor(private storageService: StorageService) {
    this._currentSort = this.storageService.getItem(this._sortStorageKey) as sortTypesEnum || this._currentSort;
  }

  set currentSort(sort: sortTypesEnum) {
    this._currentSort = sort;
    this.storageService.setItem(this._sortStorageKey, this._currentSort);
    this.sortChange.next(this._currentSort);
  }

  get currentSort() {
    return this._currentSort;
  }

  comparator(a, b) {
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
