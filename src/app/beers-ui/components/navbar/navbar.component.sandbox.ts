import { sandboxOf } from 'angular-playground';
import { NavbarComponent } from './navbar.component';
import { ButtonComponent } from '../button/button.component';

export default sandboxOf(NavbarComponent, { declarations: [ButtonComponent] })
  .add('default',  {
    template: `<app-navbar [label]="label"></app-navbar>`,
    context: {
      label: 'Beers App',
    },
  })