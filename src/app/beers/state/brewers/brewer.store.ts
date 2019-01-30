import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Brewer } from './brewer.model';

export interface BrewerState extends EntityState<Brewer> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'brewer'
})
export class BrewerStore extends EntityStore<BrewerState, Brewer> {
  constructor() {
    super();
  }
}
