import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEventosComponent } from './recent-eventos.component';

describe('RecentEventosComponent', () => {
  let component: RecentEventosComponent;
  let fixture: ComponentFixture<RecentEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
