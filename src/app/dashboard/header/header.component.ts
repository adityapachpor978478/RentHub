import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyFormComponent } from '../property-form/property-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openPropertyForm() {
    this.dialog.closeAll();
    this.dialog.open(PropertyFormComponent, {
      width: '600px',
      // position: 'absolute'
    });
  }
}