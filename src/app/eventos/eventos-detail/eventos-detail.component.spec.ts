import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDetailComponent } from './eventos-detail.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { EventosService } from '../../services/eventos.service';

describe('EventosDetailComponent', () => {
  let component: EventosDetailComponent;
  let fixture: ComponentFixture<EventosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosDetailComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpModule ],
      providers: [EventosService, {provide: APP_BASE_HREF, useValue : '/' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
