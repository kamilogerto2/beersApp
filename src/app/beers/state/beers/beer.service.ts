import { BeerStore } from './beer.store';
import { Injectable } from '@angular/core';
import { BeerRepository } from '../../services/beer.repository';
import { take, tap } from 'rxjs/operators';
import { BrewerService } from '../brewers';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private beerStore: BeerStore,
    private brewerService: BrewerService,
    private beerRepository: BeerRepository,
  ) {
  }

  getBeers(): void {
    this.beerRepository.getBeers()
      .pipe(
        take(1),
        tap(beersList => this.beerStore.set(beersList)),
        tap(beersList => this.brewerService.setBrewers(this.getBrewersFromList(beersList))),
      ).subscribe();
  }

  getBrewersFromList(beersList): string[] {
    const brewers = beersList.map(beer  => beer.brewer );

    return Array.from(new Set(brewers));
  }
}
