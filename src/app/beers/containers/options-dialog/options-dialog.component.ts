import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PaginationService } from '../../../shared/services/pagination.service';
import { SortingService } from '../../../shared/services/sorting.service';
import { ThemingService } from '../../../shared/services/theming.service';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.scss']
})
export class OptionsDialogComponent implements OnInit {
  currentPaginationLimit;
  currentSortField;
  currentThemeField;

  constructor(
    public dialogRef: MatDialogRef<OptionsDialogComponent>,
    private paginationService: PaginationService,
    private sortingService: SortingService,
    private themingService: ThemingService,
  ) {}

  ngOnInit() {
    this.currentPaginationLimit = this.paginationService.currentLimitBreakpoint;
    this.currentSortField = this.sortingService.currentSort;
    this.currentThemeField = this.themingService.currentTheme;
  }

  cancel() {
    this.dialogRef.close();
  }

  changePaginationLimit($event) {
    this.paginationService.currentLimitBreakpoint = $event.value;
  }

  setSortField($event) {
    this.sortingService.currentSort = $event.value;
  }

  setTheme($event) {
    this.themingService.currentTheme = $event.value;
  }
}
