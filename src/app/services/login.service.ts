import { Injectable } from '@angular/core';
import {localhost} from '../config/config'
import {HttpClient} from '@angular/common/http'
import {catchError,retry,tap} from 'rxjs/operators'
import {throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 readonly URL_LOGIN=`${localhost}/login`

  constructor(private http:HttpClient) { }

  // login(email,password){
  //     return this.http.post<{access_token:  string}>(this.URL_LOGIN,{email,password})
  //     localStorage.setItem('access_token', res.access_token);
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )

  // }
  login(email:string, password:string) {
    return this.http.post<{access_token: string}>(this.URL_LOGIN, {email, password})
    .pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}),
retry(1),
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
