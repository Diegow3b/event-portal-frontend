import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsComponent } from './graphs.component';
import { EventosService } from '../../../services/eventos.service';
import { HttpModule } from '@angular/http';

describe('GraphsComponent', () => {
  let component: GraphsComponent;
  let fixture: ComponentFixture<GraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsComponent ],
      providers: [ EventosService ],
      imports: [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
