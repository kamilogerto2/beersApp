import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BeersModule } from './beers/beers.module';
import { BeersUiModule } from './beers-ui/beers-ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BeersUiModule,
    BeersModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
