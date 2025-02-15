import { TestBed } from '@angular/core/testing';

import { ToastTestService } from './toast-test.service';

describe('ToastTestService', () => {
  let service: ToastTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
