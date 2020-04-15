import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxAttendanceLibraryComponent } from './ngx-attendance-library.component';



@NgModule({
  declarations: [NgxAttendanceLibraryComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [NgxAttendanceLibraryComponent]
})
export class NgxAttendanceLibraryModule { }
