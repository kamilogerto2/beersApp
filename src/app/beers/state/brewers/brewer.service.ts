import { BrewerStore } from './brewer.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrewerService {

  constructor(
    private brewerStore: BrewerStore,
  ) { }

  setBrewers(brewers): void {
    const brewersList = brewers.map((brewer, index) => ({ id: index, name: brewer }));

    this.brewerStore.set(brewersList);
  }
}
