import { Component, Input } from '@angular/core';
import { Beer } from '../../state/beers/beer.model';

@Component({
  selector: 'app-beer-tile',
  templateUrl: './beer-tile.component.html',
  styleUrls: ['./beer-tile.component.scss']
})
export class BeerTileComponent {
  @Input() beer: Beer;

  displayedProperties = ['name', 'price', 'type'];
}
