import { TestBed } from '@angular/core/testing';

import { LegalFilesService } from './legal-files.service';

describe('LegalFilesService', () => {
  let service: LegalFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
