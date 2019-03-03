import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

const components = [
  ListItemComponent,
  ButtonComponent,
  NavbarComponent,
  ImagePreviewComponent,
];

const modules = [
  CommonModule
];

const entryComponents = [
  ImagePreviewComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [...modules],
  entryComponents: [...entryComponents],
})
export class BeersUiModule { }
