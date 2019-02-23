import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeersListComponent } from './beers/containers/beers-list/beers-list.component';
import { SharedModule } from './shared/shared.module';
import { BeersUiModule } from './beers-ui/beers-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BeersUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
