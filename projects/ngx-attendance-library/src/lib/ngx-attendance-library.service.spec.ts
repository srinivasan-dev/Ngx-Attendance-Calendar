import { TestBed } from '@angular/core/testing';

import { NgxAttendanceLibraryService } from './ngx-attendance-library.service';

describe('NgxAttendanceLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAttendanceLibraryService = TestBed.get(NgxAttendanceLibraryService);
    expect(service).toBeTruthy();
  });
});
