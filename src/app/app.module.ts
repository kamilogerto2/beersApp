import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeersListComponent } from './beers/containers/beers-list/beers-list.component';
import { SharedModule } from './shared/shared.module';
import { BeersUiModule } from './beers-ui/beers-ui.module';
import { BeersLayoutComponent } from './beers/containers/beers-layout/beers-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    BeersLayoutComponent,
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
