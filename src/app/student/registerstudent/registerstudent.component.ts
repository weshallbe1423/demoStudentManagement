import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent implements OnInit {
  registerForm: FormGroup;
  email:any;
  password:any;
  confirmPassword:any;
  constructor(private formBuilder:FormBuilder,
              private _registerService:RegisterService,
              private router:Router) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  });
  }

  onSubmit() {
    this.email=this.registerForm.get('email').value
    this.password=this.registerForm.get('password').value
    this.confirmPassword= this.registerForm.get('confirmPassword').value
    this._registerService.register(this.email,this.password,this.confirmPassword).subscribe(data=>{
     console.log(data); 
     this.router.navigate(['./student/login']);
     alert('SUCCESS!! :-)\n\n');
    },
    err=>{
      console.log(err);
      alert('Not SUCCESS!! :-)\n\n');
    })
    // display form values on success
    
}


}
