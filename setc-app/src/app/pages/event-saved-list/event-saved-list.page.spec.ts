import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSavedListPage } from './event-saved-list.page';

describe('EventSavedListPage', () => {
  let component: EventSavedListPage;
  let fixture: ComponentFixture<EventSavedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSavedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSavedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
