import { TestBed } from '@angular/core/testing';

import { ContactsSaveService } from './contacts-save.service';

describe('ContactsSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsSaveService = TestBed.get(ContactsSaveService);
    expect(service).toBeTruthy();
  });
});
