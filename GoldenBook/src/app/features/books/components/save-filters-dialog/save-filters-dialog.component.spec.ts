import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFiltersDialogComponent } from './save-filters-dialog.component';

describe('SaveFiltersDialogComponent', () => {
  let component: SaveFiltersDialogComponent;
  let fixture: ComponentFixture<SaveFiltersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFiltersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveFiltersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
