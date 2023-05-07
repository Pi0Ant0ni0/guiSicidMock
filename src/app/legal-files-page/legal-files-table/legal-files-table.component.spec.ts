import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalFilesTableComponent } from './legal-files-table.component';

describe('LegalFilesTableComponent', () => {
  let component: LegalFilesTableComponent;
  let fixture: ComponentFixture<LegalFilesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalFilesTableComponent]
    });
    fixture = TestBed.createComponent(LegalFilesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
