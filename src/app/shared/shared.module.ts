import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatListModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const importedModules = [
  CommonModule,
  HttpClientModule,
  MatSelectModule,
  BrowserAnimationsModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [...importedModules],
  exports: [...importedModules],
})
export class SharedModule { }
