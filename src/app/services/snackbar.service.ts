import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

    showSnackBar(message: string) {
      this.snackBar.open(message, 'Затвори', {
        duration: 3000,
        panelClass: 'snackbar-ribon',
        verticalPosition: 'top',
        horizontalPosition: 'center'
     }
    );
  }

}
