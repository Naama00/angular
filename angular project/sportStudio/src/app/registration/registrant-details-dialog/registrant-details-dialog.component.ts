// registrant-details-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrant-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title class="dialog-title">פרטי נרשמת</h2>
    <p><strong>שם מלא:</strong> {{ data?.firstName }} {{ data?.lastName }}</p>
    <p><strong>תעודת זהות:</strong> {{ data?.id }}</p>
    <p><strong>טלפון:</strong> {{ data?.phone }}</p>
    <p><strong>שיעור:</strong> {{ data?.lessonName }}</p>
    <p><strong>מחיר:</strong> ₪ {{ data?.price }}</p>
    <p><strong>סטטוס תשלום:</strong> <span [ngClass]="{ 'status-paid': data?.isPaid, 'status-unpaid': !data?.isPaid }">{{ data?.isPaid ? '✓ שולם' : '✗ לא שולם' }}</span></p>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()" class="close-btn">סגור</button>
    </mat-dialog-actions>
  `,
  styles: [`
    :host {
      display: block;
    }

    .dialog-title {
      color: #3f51b5;
      font-size: 20px;
      font-weight: bold;
      text-align: right;
      direction: rtl;
      margin-bottom: 20px;
    }

    .dialog-content {
      direction: rtl;
      text-align: right;
      min-width: 400px;
      font-family: Arial, sans-serif;
    }

    p {
      margin: 15px 0;
      line-height: 1.6;
      font-size: 15px;
      color: #333;
    }

    p strong {
      color: #555;
      font-weight: bold;
      min-width: 120px;
      display: inline-block;
    }

    .status-paid {
      background-color: #c8e6c9;
      color: #2e7d32;
      padding: 4px 12px;
      border-radius: 4px;
      font-weight: bold;
    }

    .status-unpaid {
      background-color: #ffcdd2;
      color: #c62828;
      padding: 4px 12px;
      border-radius: 4px;
      font-weight: bold;
    }

    .close-btn {
      background-color: #3f51b5;
      color: white;
      padding: 8px 24px;
      border-radius: 4px;
    }

    .close-btn:hover {
      background-color: #303399;
    }

    mat-dialog-actions {
      padding: 20px 0 0 0;
      margin-top: 20px;
      border-top: 1px solid #eee;
    }
  `]
})
export class RegistrantDetailsDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegistrantDetailsDialogComponent>
  ) {
    console.log('Dialog opened with data:', data);
  }
}