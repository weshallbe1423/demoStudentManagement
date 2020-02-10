import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { LibraryComponent } from './library/library.component';
import { LabsComponent } from './labs/labs.component';
import { AdministrationComponent } from './administration/administration.component';


@NgModule({
  declarations: [LibraryComponent, LabsComponent, AdministrationComponent],
  imports: [
    CommonModule,
    CollegeRoutingModule
  ]
})
export class CollegeModule { }
