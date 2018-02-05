/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchUsersService } from './search-users.service';

describe('SearchUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchUsersService]
    });
  });

  it('should ...', inject([SearchUsersService], (service: SearchUsersService) => {
    expect(service).toBeTruthy();
  }));
});
