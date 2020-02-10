import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent}  from '../interface/student';
import { Observable,throwError, } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';
import {localhost} from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // student:IStudent;
  readonly URL_Student_List=`${localhost}/getStudentDetails`;
 readonly URL_Student_Save =`${localhost}/saveStudentData`
 //deleteStudentDetails
 readonly URL_Student_Delete =`${localhost}/deleteStudentDetails`


 student:IStudent
  constructor(private http:HttpClient) { }


getStudentList():Observable<IStudent>{
  return this.http.get<IStudent>(this.URL_Student_List)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

saveStudentDetails(student):Observable<IStudent>{
  return this.http.post<IStudent>(this.URL_Student_Save,student)
  .pipe(
    catchError(this.handleError)
  )
}

deleteStudent(rollnumber):Observable<any>{
  return this.http.post<any>(this.URL_Student_Delete,{rollnumber})
  .pipe(
    catchError(this.handleError)
  )
}


handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}



}
