import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAddComponent } from './eventos-add.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EventosService } from '../../../services/eventos.service';
import { HttpModule} from '@angular/http';

describe('EventosAddComponent', () => {
  let component: EventosAddComponent;
  let fixture: ComponentFixture<EventosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosAddComponent ],
      imports: [ FormsModule, HttpModule, RouterTestingModule],
      providers: [ EventosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
