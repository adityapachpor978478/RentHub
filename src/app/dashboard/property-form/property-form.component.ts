import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService, Property } from '../data.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrl: './property-form.component.scss'
})
export class PropertyFormComponent {
  property: Property;
  previewMode: boolean;
  viewDetailsMode: boolean;

  i: number;
  image: any;

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<PropertyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.i = 0;
    this.image = this.property?.photos[this.i];

    this.property = data && data.property || {
      location: '',
      contact: '',
      furnished: false,
      amenities: [],
      vegetarian: false,
      photos: []
    };
    this.previewMode = data?.previewMode || false;
    this.viewDetailsMode = data?.viewDetailsMode || false;
  }

  getSlide() {
    this.image = this.property?.photos[this.i];
    return this.image;
  }

  getPrev() {
    this.i == 0 ? (this.i = this.property.photos.length - 1) : this.i--;
    this.image = this.property.photos[this.i];
  }

  getNext() {
    this.i < this.property.photos.length - 1 ? this.i++ : (this.i = 0);
    this.image = this.property.photos[this.i];
  }

  onPreview() {
    this.previewMode = true;
  }

  onClose() {
    this.close();
  }

  onSubmit() {
    if (!this.data?.property) {
      this.dataService.addProperty(this.property);
    }
    this.close();
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length <= 3) {
      this.property.photos = [];
      for (let file of files) {
        this.property.photos.push(URL.createObjectURL(file));
      }
    } else {
      alert('You can upload a maximum of 3 photos.');
    }
  }

  onAmenityChange(event: any, amenity: string) {
    if (event.target.checked) {
      this.property.amenities.push(amenity);
    } else {
      this.property.amenities = this.property.amenities.filter(a => a !== amenity);
    }
  }

  close() {
    this.dialogRef.close();
  }

  backToForm() {
    this.previewMode = false;
    this.close();
  }
}