import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatDialogModule, MatListModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const importedModules = [
  CommonModule,
  HttpClientModule,
  MatSelectModule,
  MatSliderModule,
  BrowserAnimationsModule,
  MatListModule,
  MatButtonModule,
  MatDialogModule,
];

@NgModule({
  declarations: [],
  imports: [...importedModules],
  exports: [...importedModules],
})
export class SharedModule { }
