import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import {StudentService} from './services/student.service';
import {RegisterService} from './services/register.service';
import {LoginService} from './services/login.service'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      toastClass: 'toast toast-bootstrap-compatibility-fix',

      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return localStorage.getItem('token');},
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
    
  ],
  providers: [StudentService,
              RegisterService,
              LoginService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
