import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage = localStorage;

  setItem(key, value) {
    this.storage.setItem(key, value);
  }

  getItem(key) {
    return this.storage.getItem(key);
  }
}
