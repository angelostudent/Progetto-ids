import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportoPage } from './supporto.page';

describe('SupportoPage', () => {
  let component: SupportoPage;
  let fixture: ComponentFixture<SupportoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
