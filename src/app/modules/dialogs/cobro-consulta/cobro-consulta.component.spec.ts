import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobroConsultaComponent } from './cobro-consulta.component';

describe('CobroConsultaComponent', () => {
  let component: CobroConsultaComponent;
  let fixture: ComponentFixture<CobroConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobroConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobroConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
