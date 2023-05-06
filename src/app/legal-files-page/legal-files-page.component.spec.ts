import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalFilesPageComponent } from './legal-files-page.component';

describe('LegalFilesPageComponent', () => {
  let component: LegalFilesPageComponent;
  let fixture: ComponentFixture<LegalFilesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalFilesPageComponent]
    });
    fixture = TestBed.createComponent(LegalFilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
