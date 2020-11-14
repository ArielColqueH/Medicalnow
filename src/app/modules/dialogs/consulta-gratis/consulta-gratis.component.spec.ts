import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaGratisComponent } from './consulta-gratis.component';

describe('ConsultaGratisComponent', () => {
  let component: ConsultaGratisComponent;
  let fixture: ComponentFixture<ConsultaGratisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaGratisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
