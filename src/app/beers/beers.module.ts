import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GestureConfig } from '@angular/material';
import { BeersListComponent } from './containers/beers-list/beers-list.component';
import { BeersLayoutComponent } from './containers/beers-layout/beers-layout.component';
import { OptionsDialogComponent } from './containers/options-dialog/options-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { BeersUiModule } from '../beers-ui/beers-ui.module';

const components = [
  BeersListComponent,
  BeersLayoutComponent,
  OptionsDialogComponent,
];

const modules = [
  SharedModule,
  BeersUiModule,
];

const entryComponents = [
  OptionsDialogComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  entryComponents: [...entryComponents],
  exports: [...components],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
})
export class BeersModule { }
