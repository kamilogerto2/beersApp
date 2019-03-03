import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private _currentLimitBreakpoint = environment.defaultPaginationBreakpoint;
  private _paginationStorageKey = 'beersAppPagination';

  constructor(private storageService: StorageService) {
    const storageValue = this.storageService.getItem(this._paginationStorageKey);
    this._currentLimitBreakpoint = storageValue ? parseInt(storageValue, 10) : this._currentLimitBreakpoint;
  }

  set currentLimitBreakpoint(limit: number) {
    this._currentLimitBreakpoint = limit;
    this.storageService.setItem(this._paginationStorageKey, this._currentLimitBreakpoint);
  }

  get currentLimitBreakpoint() {
    return this._currentLimitBreakpoint;
  }
}
