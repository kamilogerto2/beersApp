import { sandboxOf } from 'angular-playground';
import { ListItemComponent } from './list-item.component';

const mockedProperties = ['name', 'price', 'type'];
const mockedItem = {
  name: 'Książece',
  price: '34$',
  type: 'lager',
};

export default sandboxOf(ListItemComponent)
  .add('without image and properties', {
    template: `<app-list-item></app-list-item>`
  })
  .add('without with properties', {
    template: `<app-list-item [item]="item" [displayedProperties]="properties"></app-list-item>`,
    context: {
      item: mockedItem,
      properties: mockedProperties,
    }
  })
  .add('with properties and image', {
    template: `<app-list-item [item]="item" [displayedProperties]="properties"></app-list-item>`,
    context: {
      item: {
        ...mockedItem,
        image_url: 'https://podarunkowo.pl/6779-large_default/szklanka-na-piwo-jego-wysokosc-super-tata.jpg',
      },
      properties: mockedProperties,
    }
  })
  .add('with long property', {
    template: `<app-list-item [item]="item" [displayedProperties]="properties"></app-list-item>`,
    context: {
      item: {
        ...mockedItem,
        image_url: 'https://podarunkowo.pl/6779-large_default/szklanka-na-piwo-jego-wysokosc-super-tata.jpg',
        name: 'Książece Przeniczne Późno Ważone',
      },
      properties: mockedProperties,
    }
  })
;
