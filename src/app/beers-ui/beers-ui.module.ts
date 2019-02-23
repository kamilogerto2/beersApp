import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const components = [
  ListItemComponent,
  ButtonComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule
  ]
})
export class BeersUiModule { }
