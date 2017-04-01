import { TestBed, inject } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppModule } from '../app.module';
import { EventosService } from './eventos.service';

describe('EventosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventosService, {provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ AppModule ]
    });
  });

  it('should ...', inject([EventosService], (service: EventosService) => {
    expect(service).toBeTruthy();
  }));
});
