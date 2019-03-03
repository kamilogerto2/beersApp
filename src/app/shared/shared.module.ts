import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GestureConfig, MatButtonModule, MatDialogModule, MatListModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

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
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
})
export class SharedModule { }
