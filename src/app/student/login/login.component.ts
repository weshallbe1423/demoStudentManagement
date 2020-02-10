import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { LoginService } from 'src/app/services/login.service';
import {retry,catchError} from 'rxjs/operators';
import {Observable,throwError, from} from 'rxjs'

import {Router} from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 imgUrl=""
loginForm:FormGroup;
email:any;
password:any;
constructor(private fb :FormBuilder,
            private _authService:AuthenticationService,
            private router:Router,
            private toastr:ToastrService
            ) {
  this.loginForm=fb.group({
    email:['', Validators.required],
    password:['',Validators.required]
  })

 }
  
  ngOnInit() {
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  login(){
    this.email=this.loginForm.get('email').value
    this.password=this.loginForm.get('password').value
    this._authService.login(this.email,this.password).subscribe(data=>{
      if(data){
        // console.log(data)
        this.showSuccess();
        this.router.navigate(['./home']);
      }else{
        console.log("something  wrong!!");
      }
    },
    err=>{
      console.log(err);
    })

  }

}
