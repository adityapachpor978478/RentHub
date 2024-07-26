import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService, Property } from '../data.service';
import { PropertyFormComponent } from '../property-form/property-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  featuredProperty: Property;
  otherProperties: Property[];

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    const properties = this.dataService.getProperties();
    this.featuredProperty = this.dataService.getRandomProperty();
    this.otherProperties = this.dataService.getProperties();
  }

  openDetails(property: Property) {
    this.dialog.closeAll();
    this.dialog.open(PropertyFormComponent, {
      width: '80%',
      position: {
        top: '-400px',
        left: '10%'
      },
      data: { property, previewMode: true, viewDetailsMode: true }
    });
  }
}
