import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartaSeccionComponent } from './cuarta-seccion.component';

describe('CuartaSeccionComponent', () => {
  let component: CuartaSeccionComponent;
  let fixture: ComponentFixture<CuartaSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartaSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
