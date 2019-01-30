import { QueryEntity } from '@datorama/akita';
import { BeerState, BeerStore } from './beer.store';
import { Injectable } from '@angular/core';
import { Beer } from './beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerQuery extends QueryEntity<BeerState, Beer> {
  constructor(protected store: BeerStore) {
    super(store);
  }
}
