import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'college',loadChildren:()=>import('./college/college.module').then(m=>m.CollegeModule)},
  {path:'department',loadChildren:()=>import('./department/department.module').then(m=>m.DepartmentModule)},
  {path:'guest-house',loadChildren:()=>import('./guest-house/guest-house.module').then(m=>m.GuestHouseModule)},
  {path:'student',loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes), 
  	FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
