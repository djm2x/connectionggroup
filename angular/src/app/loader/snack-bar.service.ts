import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    const config = {
      panelClass: ['warn-snackbar'],
      duration: 4500
    };

    this.snackBar.open(message, null, config);
  }

  notifyOk(message: string) {
    const config = {
      panelClass: ['yellow-snackbar'],
      duration: 7500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: 'bottom',
    };

    this.snackBar.open(message, null, config as any);
  }

  notifyAlert(message: string) {
    const config = {
      panelClass: ['alert-snackbar'],
      duration: 15500
    };

    this.snackBar.open(message, null, config);
  }
}
