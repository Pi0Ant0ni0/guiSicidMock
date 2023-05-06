import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLegalFileDialogComponent } from './add-legal-file-dialog.component';

describe('AddLegalFileDialogComponent', () => {
  let component: AddLegalFileDialogComponent;
  let fixture: ComponentFixture<AddLegalFileDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLegalFileDialogComponent]
    });
    fixture = TestBed.createComponent(AddLegalFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
