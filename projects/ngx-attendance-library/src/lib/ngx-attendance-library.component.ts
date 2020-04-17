import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  // selector: 'Ngx-NgxAttendanceLibrary',
  selector: 'Ngx-AttendanceCalendar',
  templateUrl: './ngx-attendance-library.component.html',
  styleUrls: [ './ngx-attendance-library.component.css' ]

})
export class NgxAttendanceLibraryComponent implements OnInit {

  @Input() monthData:string;
  @Input() yearData:string;
  @Input() attendanceData;
  selectedMonth:string;
  selectedYear:string;
  usrInputDate:string;

  constructor() { }

  ngOnInit() {
    this.selectedMonth = this.monthData;
    this.selectedYear = this.yearData;
    this.usrInputDate = this.selectedMonth+" 1 "+this.selectedYear;
    console.log(this.selectedMonth)
    console.log(this.selectedYear)
    console.log(this.usrInputDate)
    // console.log(this.attendanceData)
    this.calendarInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedMonth = this.monthData;
this.selectedYear = this.yearData;
this.usrInputDate = this.selectedMonth+" 1 "+this.selectedYear;
console.log(this.selectedMonth)
console.log(this.selectedYear)
console.log(this.usrInputDate)
// console.log(this.attendanceData)
this.calendarInit();
}

yearsArr = ["2020", "2021", "2022", "2023", "2024", "2025"]
yearMonthArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec",];
weekDayArr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
weekOne= [];
weekTwo= [];
weekThree= [];
weekFour= [];
weekFive= [];
weekSix= [];
monthArr:any =[
  {'weekArr': this.weekOne},
  {'weekArr': this.weekTwo},
  {'weekArr': this.weekThree},
  {'weekArr': this.weekFour},
  {'weekArr': this.weekFive},
  {'weekArr': this.weekSix}
  ];

onChangeMonth(val){
  // console.log("running")
  this.selectedMonth = val;
  this.usrInputDate = this.selectedMonth+" 1 "+this.selectedYear;
  this.calendarInit();
}
onChangeYear(val){
  // console.log("running")
  this.selectedYear = val;
  this.usrInputDate = this.selectedMonth+" 1 "+this.selectedYear;
  this.calendarInit();
}


checkWeekVal(arr){
  if(arr[0] === undefined && arr[6] === undefined){
    return true
  }
}

calendarInit(){
    this.weekOne= [];
    this.weekTwo= [];
    this.weekThree= [];
    this.weekFour= [];
    this.weekFive= [];
    this.weekSix= [];

  let date = new Date();
  let inputDate = this.usrInputDate;


  let newyear2008year = new Date(inputDate).getFullYear();
  let newyear2008month = new Date(inputDate).getMonth();
  let newyear2008day = new Date(inputDate).getDate();

  let findMonthDayCount = new Date(newyear2008year, newyear2008month +1, 0).getDate(); 
  // console.log("findMonthDayCount " +findMonthDayCount)
  let firstDayofMonth =new Date(inputDate).getDay();
  // console.log(firstDayofMonth); 
  // console.log(this.weekDayArr[firstDayofMonth]);

  for(let i=0;i<7;i++){

    this.weekOne[i] = i - firstDayofMonth + 1;
  }
  // console.log(this.weekOne);

  for(let i=0;i<7;i++){
    this.weekTwo[i] = i+ this.weekOne[6] + 1;
  }
  // console.log(this.weekTwo);


  for(let i=0;i<7;i++){
    this.weekThree[i] = i+ this.weekTwo[6] + 1;
  }
  // console.log(this.weekThree);


  for(let i=0;i<7;i++){
    this.weekFour[i] = i+ this.weekThree[6] + 1;
  }
  // console.log(this.weekFour);


  for(let i=0;i<7;i++){
    let insertVal = i+ this.weekFour[6] + 1;
    if(insertVal <= findMonthDayCount){
      this.weekFive[i] = i+ this.weekFour[6] + 1;
    } else {
      this.weekFive[i] = undefined;
    }

  }
  // console.log(this.weekFive);


  for(let i=0;i<7;i++){
    let insertVal = i+ this.weekFive[6] + 1;
    if(insertVal <= findMonthDayCount){
      this.weekSix[i] = i+ this.weekFive[6] + 1;
    } else {
      this.weekSix[i] = undefined;
    }

  }
  // console.log(this.weekSix);


  this.monthArr[0].weekArr = this.weekOne;
  this.monthArr[1].weekArr = this.weekTwo;
  this.monthArr[2].weekArr = this.weekThree;
  this.monthArr[3].weekArr = this.weekFour;
  this.monthArr[4].weekArr = this.weekFive;
  this.monthArr[5].weekArr = this.weekSix;

  // console.log(this.monthArr[4].weekArr);
  
}


  
  getColor(day) { 

// for single months 
//  console.log("attendanceData");
//  console.log(this.monthData)
    // console.log(this.attendanceData[0]);
    let attendanceData = this.attendanceData[0].data;

    if(this.attendanceData[0].month === this.selectedMonth){
      for(let i=0; i < attendanceData.length; i++){
        if(attendanceData[i].date === day){
              // console.log("pass");
              switch (attendanceData[i].status) {
                case 'present':
                  return '#aed581';
                case 'abscent':
                  return '#ef9a9a';
                case 'woff':
                  return '#ccc';
                case 'req':
                  return '#F6F185';  
              }
        }
      }
    }
      


}



}
