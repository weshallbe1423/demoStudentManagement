import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  
  constructor(private _studentService:StudentService) { }
 studentData:[];
 Data:any;
  ngOnInit() {
     this.getStudentDetails();
  }
 handleData(data){
  this.studentData=data.Data;
  console.log(this.studentData);

 }
  getStudentDetails(){
    this._studentService.getStudentList().subscribe(data=>{
      this.handleData(data);
      //  this.studentData=data
      console.log(this.studentData);
    },err=>{
      console.log(err);
    })
  }

  deleteStudent(rollnumber){
    this._studentService.deleteStudent(rollnumber)
    .subscribe(data=>{
      console.log(data)
      alert("deleted")
    },err=>{
      alert(err)
    })
    
  }

}
