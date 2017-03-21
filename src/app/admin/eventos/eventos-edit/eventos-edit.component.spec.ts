import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEditComponent } from './eventos-edit.component';

describe('EventosEditComponent', () => {
  let component: EventosEditComponent;
  let fixture: ComponentFixture<EventosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
