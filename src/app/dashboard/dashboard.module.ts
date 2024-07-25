import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, PropertyFormComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
 ],
})
export class DashboardModule { }
