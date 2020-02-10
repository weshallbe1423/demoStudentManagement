import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent}  from '../interface/student';
import { Observable,throwError, } from 'rxjs';
import { retry,catchError,tap } from 'rxjs/operators';
import {localhost} from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  readonly URL_Register_student=`${localhost}/signup`
  constructor(private http:HttpClient) { }


  // registerStudent(email,password,confirmPassword){
  //   return this.http.post(this.URL_Register_student,{email,password,confirmPassword})
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }
  register(email:string, password:string,confirmPassword:string) {
    return this.http.post<{access_token: string}>(this.URL_Register_student, {email, password,confirmPassword})
    .pipe(tap(res => {
      console.log(res);
    // this.login(email, password)
}))
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
