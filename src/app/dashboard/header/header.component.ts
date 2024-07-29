import { Component, EventEmitter, Output, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyFormComponent } from '../property-form/property-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  location: string = '';
  furnished: string = '';
  vegetarian: string = '';
  amenities: string[] = [];
  filterVisible: boolean = false;
  searchApplied: boolean = false;

  @Output() searchAndFilter = new EventEmitter<any>();
  @Output() propertyAdded = new EventEmitter<any>();

  @ViewChildren('amenityCheckbox') amenityCheckboxes: QueryList<any>;

  constructor(private dialog: MatDialog) {}

  onSearchAndFilter() {
    if (this.searchApplied) {
      this.clearSearchAndFilter();
    } else {
      const filterCriteria = {
        location: this.location,
        furnished: this.furnished,
        vegetarian: this.vegetarian,
        amenities: this.amenities
      };
      this.searchAndFilter.emit(filterCriteria);
      this.searchApplied = true;
    }
  }

  onAmenityChange(event: any, amenity: string) {
    if (event.target.checked) {
      this.amenities.push(amenity);
    } else {
      this.amenities = this.amenities.filter(a => a !== amenity);
    }
  }

  toggleFilters() {
    this.filterVisible = !this.filterVisible;
  }

  clearSearchAndFilter() {
    this.location = '';
    this.furnished = '';
    this.vegetarian = '';
    this.amenities = [];
    this.searchApplied = false;
    this.filterVisible = false;
    this.amenityCheckboxes.forEach(checkbox => checkbox.nativeElement.checked = false);
    this.searchAndFilter.emit({
      location: this.location,
      furnished: this.furnished,
      vegetarian: this.vegetarian,
      amenities: this.amenities
    });
  }

  openPropertyForm() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(PropertyFormComponent, {
      width: '600px',
      position: {
        top: '-400px',
        left: '400px'
      }
    });

    dialogRef.afterClosed().subscribe(() => {      
      this.propertyAdded.emit(true);
    });
  }
}