import { TestBed, inject } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { AppModule } from '../app.module';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, {provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ AppModule ]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
