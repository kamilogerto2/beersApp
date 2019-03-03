import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OptionsDialogComponent } from './beers/containers/options-dialog/options-dialog.component';
import { themingTypesEnum } from './shared/enum/themeTypes.enum';
import { ThemingService } from './shared/services/theming.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BEERS APP';
  theme: themingTypesEnum;

  constructor(
    public dialog: MatDialog,
    public themingService: ThemingService,
  ) { }

  ngOnInit() {
    this.theme = this.themingService.currentTheme;

    this.themingService.themeChange.pipe(
      distinctUntilChanged(),
    ).subscribe(
      currentTheme => this.theme = currentTheme
    );
  }

  openOptions(): void {
    this.dialog.open(OptionsDialogComponent);
  }
}
