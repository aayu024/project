import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecordPage } from './view-record.page';

describe('ViewRecordPage', () => {
  let component: ViewRecordPage;
  let fixture: ComponentFixture<ViewRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
