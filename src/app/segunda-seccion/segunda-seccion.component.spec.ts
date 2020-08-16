import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaSeccionComponent } from './segunda-seccion.component';

describe('SegundaSeccionComponent', () => {
  let component: SegundaSeccionComponent;
  let fixture: ComponentFixture<SegundaSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
