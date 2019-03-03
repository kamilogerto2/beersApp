import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BeerQuery, BeerService, Brewer } from '../../state/beers';
import { Beer, BrewerQuery } from '../../state/brewers';
import { Observable, Subject } from 'rxjs';
import { filter, map, take, takeUntil, tap, toArray } from 'rxjs/operators';
import { PaginationService } from '../../../shared/services/pagination.service';
import { Order } from '@datorama/akita';
import { SortingService } from '../../../shared/services/sorting.service';
import { BeerStorageService } from '../../services/beer-storage.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss'],
  providers: [BeerStorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersListComponent implements OnInit, OnDestroy {
  @Input() beerListIndex: number;

  currentBrewer: string;
  brewers$: Observable<Brewer[]>;
  beers$: Observable<Beer[]>;
  currentLimit: number;
  displayedProperties = ['name', 'price', 'type'];
  unsubscribe$ = new Subject();
  hasMoreItems = true;

  constructor(
    private beerService: BeerService,
    private beerQuery: BeerQuery,
    private brewerQuery: BrewerQuery,
    private paginationService: PaginationService,
    private sortingService: SortingService,
    private beerStorageService: BeerStorageService,
  ) { }

  ngOnInit() {
    this.currentLimit = this.paginationService.currentLimitBreakpoint;
    this.beerStorageService.configure(this.beerListIndex);
    this.currentBrewer = this.beerStorageService.selectedBrewer;
    this.brewers$ = this.brewerQuery.selectAll();
    this.beerService.getBeers();
    this.updateBeersList();

    this.sortingService.sortChange
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => {
        this.updateBeersList();
      });
  }

  updateBeersList() {
    this.beers$ = this.beerQuery
      .selectAll({
        limitTo: this.currentLimit,
        filterBy: beer => beer.brewer === this.currentBrewer,
        sortBy: this.sortingService.comparator.bind(this.sortingService),
        sortByOrder: Order.ASC,
      })
      .pipe(
        filter(beers => !!beers.length),
        tap((beers) => {
          this.hasMoreItems = beers.length === this.currentLimit;
        }),
        take(1),
      );
  }

  loadMoreResults() {
    this.currentLimit += this.paginationService.currentLimitBreakpoint;
    this.updateBeersList();
  }

  trackBeer(index, item) {
    return item.beer_id;
  }

  selectBrewer($event) {
    this.currentLimit = this.paginationService.currentLimitBreakpoint;
    this.currentBrewer = $event.value;
    this.beerStorageService.selectedBrewer = this.currentBrewer;
    this.updateBeersList();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
