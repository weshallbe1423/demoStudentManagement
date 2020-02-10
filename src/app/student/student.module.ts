import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { FirstYearComponent } from './first-year/first-year.component';
import { SecondYearComponent } from './second-year/second-year.component';
import { ThirdYearComponent } from './third-year/third-year.component';
import { LastYearComponent } from './last-year/last-year.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    FirstYearComponent,
     SecondYearComponent,
      ThirdYearComponent,
       LastYearComponent,
       StudentlistComponent,
       RegisterstudentComponent,
       LoginComponent,
       ForgotPasswordComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class StudentModule { }
