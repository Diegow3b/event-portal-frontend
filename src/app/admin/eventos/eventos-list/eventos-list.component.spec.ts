import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListComponent } from './eventos-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EventosService } from '../../../services/eventos.service';
import { HttpModule} from '@angular/http';

describe('EventosListComponent', () => {
  let component: EventosListComponent;
  let fixture: ComponentFixture<EventosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosListComponent ],
      imports: [ RouterTestingModule, HttpModule ],
      providers: [ EventosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
