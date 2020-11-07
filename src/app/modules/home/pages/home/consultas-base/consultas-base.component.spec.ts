import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasBaseComponent } from './consultas-base.component';

describe('ConsultasBaseComponent', () => {
  let component: ConsultasBaseComponent;
  let fixture: ComponentFixture<ConsultasBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
