import { QueryEntity } from '@datorama/akita';
import { BrewerStore, BrewerState } from './brewer.store';
import { Injectable } from '@angular/core';
import { Brewer } from './brewer.model';

@Injectable({
  providedIn: 'root'
})
export class BrewerQuery extends QueryEntity<BrewerState, Brewer> {
  constructor(protected store: BrewerStore) {
    super(store);
  }
}
