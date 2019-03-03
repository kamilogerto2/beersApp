import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { themingTypesEnum } from '../enum/themeTypes.enum';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  private _themeType = themingTypesEnum.dark;
  private _themingStorageKey = 'beerAppTheme';
  themeChange = new Subject<themingTypesEnum>();

  constructor(private storageService: StorageService) {
    this._themeType = this.storageService.getItem(this._themingStorageKey) as themingTypesEnum || this._themeType;
  }

  set currentTheme(themeType: themingTypesEnum) {
    this._themeType = themeType;
    this.storageService.setItem(this._themingStorageKey, this._themeType);
    this.themeChange.next(this._themeType);
  }

  get currentTheme(): themingTypesEnum {
    return this._themeType;
  }
}
