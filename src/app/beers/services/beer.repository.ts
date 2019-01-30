import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Beer } from '../state/beers/beer.model';

const beerPluralUrl = 'beers/';

@Injectable({
  providedIn: 'root',
})
export class BeerRepository {

  constructor (private crudService: CrudService) { }

  getBeers = () => this.crudService.list<Beer>(beerPluralUrl, {});
}
