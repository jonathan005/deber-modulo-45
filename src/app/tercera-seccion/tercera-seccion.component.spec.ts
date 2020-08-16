import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraSeccionComponent } from './tercera-seccion.component';

describe('TerceraSeccionComponent', () => {
  let component: TerceraSeccionComponent;
  let fixture: ComponentFixture<TerceraSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceraSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
