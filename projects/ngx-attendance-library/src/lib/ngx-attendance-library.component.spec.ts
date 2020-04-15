import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAttendanceLibraryComponent } from './ngx-attendance-library.component';

describe('NgxAttendanceLibraryComponent', () => {
  let component: NgxAttendanceLibraryComponent;
  let fixture: ComponentFixture<NgxAttendanceLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAttendanceLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAttendanceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
