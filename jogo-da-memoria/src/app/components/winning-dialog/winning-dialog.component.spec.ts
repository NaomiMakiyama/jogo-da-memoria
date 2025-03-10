import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningDialogComponent } from './winning-dialog.component';

describe('WinningDialogComponent', () => {
  let component: WinningDialogComponent;
  let fixture: ComponentFixture<WinningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinningDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
