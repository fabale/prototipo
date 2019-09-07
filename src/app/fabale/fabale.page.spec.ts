import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabalePage } from './fabale.page';

describe('FabalePage', () => {
  let component: FabalePage;
  let fixture: ComponentFixture<FabalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
