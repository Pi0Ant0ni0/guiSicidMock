import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTableDialogComponent } from './events-table-dialog.component';

describe('EventsTableDialogComponent', () => {
  let component: EventsTableDialogComponent;
  let fixture: ComponentFixture<EventsTableDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsTableDialogComponent]
    });
    fixture = TestBed.createComponent(EventsTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
