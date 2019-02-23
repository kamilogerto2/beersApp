import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private _currentLimitBreakpoint = environment.defaultPaginationBreakpoint;

  set currentLimitBreakpoint(limit: number) {
    this._currentLimitBreakpoint = limit;
  }

  get currentLimitBreakpoint() {
    return this._currentLimitBreakpoint;
  }
}
