import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetSecondComponent } from './bottom-sheet-second.component';

describe('BottomSheetSecondComponent', () => {
  let component: BottomSheetSecondComponent;
  let fixture: ComponentFixture<BottomSheetSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
