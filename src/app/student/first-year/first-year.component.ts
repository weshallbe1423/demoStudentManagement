import { Component, OnInit,HostListener } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import {IStudent} from 'src/app/interface/student'
import {Location} from '@angular/common'
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-first-year',
  templateUrl: './first-year.component.html',
  styleUrls: ['./first-year.component.css']
})
export class FirstYearComponent implements OnInit {

  studentForm:FormGroup;
  student:IStudent;
  submitted = false;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(private fb:FormBuilder,
              private _studentService:StudentService,
              private _location:Location) {
    this.studentForm=this.fb.group({
      rollnumber:['',Validators.required],
      firstName:['',Validators.required],
      middleName:['',Validators.required],
      lastName:['',Validators.required],
      className:['',Validators.required],
      classYear:['',Validators.required],
      admissionYear:['',Validators.required],
    })
   }

  ngOnInit() {
  }
  @HostListener('click')
  onClick() {
      this._location.back();
  }
  get f() { return this.studentForm.controls; }

  saveStudent(){
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
  }else{
    this._studentService.saveStudentDetails(this.studentForm.value).subscribe(data=>{
      alert("success")
    },err=>{
      alert(err);
    })

  }
  
  }
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }


}
