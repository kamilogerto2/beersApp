import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private _currentLimitBreakpoint = 1;

  constructor() {}

  set currentLimitBreakpoint(limit: number) {
    this._currentLimitBreakpoint = limit;
  }

  get currentLimitBreakpoint() {
    return this._currentLimitBreakpoint;
  }
}
