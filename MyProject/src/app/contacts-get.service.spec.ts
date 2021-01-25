import { TestBed } from '@angular/core/testing';

import { ContactsGetService } from './contacts-get.service';

describe('ContactsGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsGetService = TestBed.get(ContactsGetService);
    expect(service).toBeTruthy();
  });
});
