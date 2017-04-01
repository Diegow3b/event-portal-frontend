import { TestBed, inject } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppModule } from '../app.module';
import { TimelineService } from './timeline.service';

describe('TimelineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineService, {provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ AppModule ]
    });
  });

  it('should ...', inject([TimelineService], (service: TimelineService) => {
    expect(service).toBeTruthy();
  }));
});
