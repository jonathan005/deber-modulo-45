import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraSeccionComponent } from './primera-seccion.component';

describe('PrimeraSeccionComponent', () => {
  let component: PrimeraSeccionComponent;
  let fixture: ComponentFixture<PrimeraSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeraSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
