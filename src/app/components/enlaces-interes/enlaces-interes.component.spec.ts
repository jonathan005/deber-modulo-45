import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesInteresComponent } from './enlaces-interes.component';

describe('EnlacesInteresComponent', () => {
  let component: EnlacesInteresComponent;
  let fixture: ComponentFixture<EnlacesInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlacesInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
