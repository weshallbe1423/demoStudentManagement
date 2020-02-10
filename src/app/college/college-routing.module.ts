import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { LabsComponent } from './labs/labs.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  {path:'administration',component:AdministrationComponent},
  {path:'labs',component:LabsComponent},
  {path:'library',component:LibraryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule { }
