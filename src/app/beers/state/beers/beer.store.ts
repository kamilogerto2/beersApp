import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Beer } from './beer.model';

export interface BeerState extends EntityState<Beer> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'beer',
  idKey: 'beer_id'
})
export class BeerStore extends EntityStore<BeerState, Beer> {
  constructor() {
    super();
  }
}
