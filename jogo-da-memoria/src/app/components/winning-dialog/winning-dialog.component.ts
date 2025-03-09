import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-winning-dialog',
  imports: [],
  templateUrl: './winning-dialog.component.html',
  styleUrl: './winning-dialog.component.scss'
})
export class WinningDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WinningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onRetry(): void {
    this.dialogRef.close(true); // Close the dialog and return `true` to indicate retry
  }
  onClose(): void {
    this.dialogRef.close(false); // Close the dialog without retrying
  }

}
