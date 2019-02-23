import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BeersListComponent } from './beers/containers/beers-list/beers-list.component';
import { SharedModule } from './shared/shared.module';
import { BeersUiModule } from './beers-ui/beers-ui.module';
import { BeersLayoutComponent } from './beers/containers/beers-layout/beers-layout.component';
import { OptionsDialogComponent } from './beers/containers/options-dialog/options-dialog.component';
import { GestureConfig } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    BeersLayoutComponent,
    OptionsDialogComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BeersUiModule,
  ],
  entryComponents: [
    OptionsDialogComponent
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
