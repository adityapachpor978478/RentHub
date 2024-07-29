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
  properties: Property[] = [];
  filteredProperties: Property[] = [];
  featuredProperty: Property | null;

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.properties = [];
    setTimeout(() => {
      this.properties = this.dataService.getProperties();
      this.filteredProperties = [...this.properties];
      this.setFeaturedProperty();
    },10)
  }

  openPropertyForm() {
    const dialogRef = this.dialog.open(PropertyFormComponent, {
      width: '600px',
      data: { property: null, previewMode: false }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadProperties();
    });
  }

  openDetails(property: Property) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(PropertyFormComponent, {
      width: '80%',
      position: {
        top: '-400px',
        left: '10%'
      },
      data: { property, previewMode: true, viewDetailsMode: true }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadProperties();
    });
  }

  onPropertyAdd() {
    this.loadProperties();
  }

  setFeaturedProperty() {
    if (this.filteredProperties.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.filteredProperties.length);
      this.featuredProperty = this.filteredProperties[randomIndex];
    } else {
      this.featuredProperty = null;
    }
  }

  onSearchAndFilter(filterCriteria: any) {
    this.filteredProperties = this.properties.filter(property => {
      const matchesLocation = property.location.toLowerCase().includes(filterCriteria.location.toLowerCase());
      const matchesFurnished = filterCriteria.furnished === '' || property.furnished.toString() === filterCriteria.furnished;
      const matchesVegetarian = filterCriteria.vegetarian === '' || property.vegetarian.toString() === filterCriteria.vegetarian;
      const matchesAmenities = filterCriteria.amenities.every((amenity: string) => property.amenities.includes(amenity));
      return matchesLocation && matchesFurnished && matchesVegetarian && matchesAmenities;
    });
    this.setFeaturedProperty();
  }

  applyFilters() {
    this.filteredProperties = [...this.properties];
    // Apply current filter criteria if any
    this.onSearchAndFilter({
      location: '',
      furnished: '',
      vegetarian: '',
      amenities: []
    });
  }
}
