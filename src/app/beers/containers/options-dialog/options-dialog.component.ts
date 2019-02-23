import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PaginationService } from '../../../shared/services/pagination.service';
import { SortingService } from '../../../shared/services/sorting.service';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.scss']
})
export class OptionsDialogComponent implements OnInit {
  currentPaginationLimit;
  currentSortField;

  constructor(
    public dialogRef: MatDialogRef<OptionsDialogComponent>,
    private paginationService: PaginationService,
    private sortingService: SortingService,
  ) {}

  ngOnInit() {
    this.currentPaginationLimit = this.paginationService.currentLimitBreakpoint;
    this.currentSortField = this.sortingService.currentSort;
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
    // set theme
  }
}
