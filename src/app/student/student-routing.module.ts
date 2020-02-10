import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstYearComponent } from './first-year/first-year.component';
import { SecondYearComponent } from './second-year/second-year.component';
import { ThirdYearComponent } from './third-year/third-year.component';
import { LastYearComponent } from './last-year/last-year.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import {RegisterstudentComponent} from './registerstudent/registerstudent.component'
import {LoginComponent} from './login/login.component'
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component'

const routes: Routes = [
  {path:'first',component:FirstYearComponent},
  {path:'second',component:SecondYearComponent},
  {path:'third',component:ThirdYearComponent},
  {path:'last',component:LastYearComponent},
  {path:'student-list',component:StudentlistComponent},
  {path:'register',component:RegisterstudentComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
