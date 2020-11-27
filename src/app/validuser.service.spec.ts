import { TestBed } from '@angular/core/testing';

import { ValiduserService } from './validuser.service';

describe('ValiduserService', () => {
  let service: ValiduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValiduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
