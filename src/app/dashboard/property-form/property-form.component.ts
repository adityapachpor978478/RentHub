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

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<PropertyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
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

  close() {
    this.dialogRef.close();
  }

  backToForm() {
    this.previewMode = false;
    this.close();
  }
}