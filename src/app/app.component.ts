import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OptionsDialogComponent } from './beers/containers/options-dialog/options-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: 'Beers app';

  constructor(public dialog: MatDialog) {}

  openOptions(): void {
    this.dialog.open(OptionsDialogComponent);
  }
}
