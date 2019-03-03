import { Injectable } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class BeerStorageService {
  private _storageBrewerKey: string;
  private _selectedBrewer: string;

  constructor(private storageService: StorageService) {}

  configure(beerListIndex: number) {
    this._storageBrewerKey = `beersAppBrewer_${beerListIndex}`;
    this._selectedBrewer = this.storageService.getItem(this._storageBrewerKey) || null;
  }

  get selectedBrewer(): string {
    return this._selectedBrewer;
  }

  set selectedBrewer(brewer: string) {
    this.storageService.setItem(this._storageBrewerKey, brewer);
  }
}
