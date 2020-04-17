# NgxAttendanceCalendarLibrary


* A simple calendar `component` to be used with Angular component.
* This component enhances the funtionality of Angular attendance calendar component and is recommended that it is used with angular 6+ apps.
* It is developed using `Angular >=8.0.0` and its newly introduced `ng g library` schematics.
* This library is generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.
* Library location: `projects/ngx-attendace-library` directory of this repository.

## Examples/Demo

* stackblitz https://stackblitz.com/edit/ngx-attendance-library

## Installation

`npm i ngx-attendance-library --save`

## API

`import { NgxAttendanceLibraryModule } from 'ngx-attendance-library''`<br>
`selector: Ngx-AttendanceCalendar`

### @Inputs()

| Input          | Type   | Required | Description                | 
| -------------- |:------:| --------:| --------------------------:|
| monthData      | string | **YES**  | selected month             |
| yearData       | string | **YES**  | selected year              |
| attendanceData | object | **YES**  | attendance data like below |



### attendanceData example
```typescript
[
    { 
      "year": "2020",
      "month": "apr",
      "data": [
          {
            "date": 1,
            "status": "present"
          },
          {
            "date": 2,
            "status": "abscent"
          },
          {
            "date": 3,
            "status": "present"
          },
          {
            "date": 4,
            "status": "woff"
          },
          {
            "date": 5,
            "status": "woff"
          },
          {
            "date": 6,
            "status": "present"
          },
          {
            "date": 7,
            "status": "present"
          },
          {
            "date": 8,
            "status": "present"
          },
          {
            "date": 9,
            "status": "present"
          },
          {
            "date": 10,
            "status": "present"
          },
          {
            "date": 11,
            "status": "woff"
          },
          {
            "date": 12,
            "status": "woff"
          },
          {
            "date": 13,
            "status": "req"
          }
        ] 
    }
  ]
```

## Usage

1) Register the `NgxAttendanceLibraryModule` in your app module.
 > `import { NgxAttendanceLibraryModule } from 'ngx-attendance-library'`

 ```typescript
 import { BrowserModule } from '@angular/platform-browser';
 import { CommonModule } from '@angular/common';
 import { NgxAttendanceLibraryModule } from 'ngx-attendance-library';

@NgModule({
  declarations: [...],
  imports: [
    BrowserModule,
    CommonModule,
    NgxAttendanceLibraryModule,
  ],
  providers: [],
  bootstrap: [...]
})
export class AppModule {}
 ```

 2) go to your component.

```typescript
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'mat-ta-root',
  template: `
  <Ngx-AttendanceCalendar [monthData]="selectedMonth" [yearData]="selectedyear" [attendanceData]="myAttData"></Ngx-AttendanceCalendar>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Paramteres for the input type are defined below. The url is generated using `json-server`.
  // Please run your own instance of the json-server to use the the below url.
  selectedMonth:string = "apr"
  selectedyear:string = "2020"
  myAttData = [
  { 
    "year": "2020",
    "month": "apr",
    "data": [
        {
          "date": 1,
          "status": "present"
        },
        {
          "date": 2,
          "status": "abscent"
        },
        {
          "date": 3,
          "status": "present"
        },
        {
          "date": 4,
          "status": "woff"
        },
        {
          "date": 5,
          "status": "woff"
        },
        {
          "date": 6,
          "status": "present"
        },
        {
          "date": 7,
          "status": "present"
        },
        {
          "date": 8,
          "status": "present"
        },
        {
          "date": 9,
          "status": "present"
        },
        {
          "date": 10,
          "status": "present"
        },
        {
          "date": 11,
          "status": "woff"
        },
        {
          "date": 12,
          "status": "woff"
        },
        {
          "date": 13,
          "status": "req"
        }
      ] 
  }
];


  constructor() {}



  ngOnInit() {
    
  }


}
```

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the NgxAttendanceLibrary module

Run `ng build NgxAttendanceLibrary` to build the library. The build artifacts will be stored in the `dist/ngx-attendance-library` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test NgxAttendanceLibrary` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Credits

This project is based on [Ngx-Attendance-Calendar](https://github.com/srinivasanacg/Ngx-Attendance-Calendar). I want to thank entire [Angular](https://angular.io) team for creating this awesome framework.
