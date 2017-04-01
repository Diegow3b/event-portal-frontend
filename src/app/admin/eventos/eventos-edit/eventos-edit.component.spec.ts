import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEditComponent } from './eventos-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EventosService } from '../../../services/eventos.service';
import { HttpModule} from '@angular/http';

describe('EventosEditComponent', () => {
  let component: EventosEditComponent;
  let fixture: ComponentFixture<EventosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEditComponent ],
      imports: [ FormsModule, HttpModule, RouterTestingModule ],
      providers: [ EventosService ]
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
