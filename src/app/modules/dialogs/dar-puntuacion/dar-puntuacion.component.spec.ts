import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarPuntuacionComponent } from './dar-puntuacion.component';

describe('DarPuntuacionComponent', () => {
  let component: DarPuntuacionComponent;
  let fixture: ComponentFixture<DarPuntuacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarPuntuacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarPuntuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
