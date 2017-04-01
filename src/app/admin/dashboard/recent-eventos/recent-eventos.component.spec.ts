import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEventosComponent } from './recent-eventos.component';
import { EventosService } from '../../../services/eventos.service';
import { HttpModule } from '@angular/http';

describe('RecentEventosComponent', () => {
  let component: RecentEventosComponent;
  let fixture: ComponentFixture<RecentEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentEventosComponent ],
      providers: [ EventosService ],
      imports: [ HttpModule ]
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
