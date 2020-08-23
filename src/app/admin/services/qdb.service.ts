import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import {Question} from  './../shared/question.model'
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QdbService {

  constructor(private http:HttpClient) { }

  baseUrl=environment.baseUrl
  check():Observable<Question>{
    return this.http.get<Question>(`${this.baseUrl}/qdata`)
  }
  
  adddata(data:Question):Observable<Question>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Question>(`${this.baseUrl}/qdata`,data,httpOptions).pipe(catchError(this.handleError))
  }

  getqbytid(tid:string):Observable<Question>{
    return this.http.get<Question>(`${this.baseUrl}/qdata/${tid}`)

  }

  getRefByTopicid(tid:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/qdataTID/${tid}`)
  }

  getOptByRefid(tid:string,refId:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/qdata/${tid}/${refId}`)
  }

  getcount(tid:string,refid:string,mcqname:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/surveydata/${tid}/${refid}/${mcqname}`)
  }

  getTopicId():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/qdataTOPIC`)
  }

  getOptions(tid:string,ref:string,question:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/qdataques/${tid}/${ref}/${question}`)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('some message');
  };
}
