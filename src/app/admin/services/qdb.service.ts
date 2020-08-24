import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import {Question} from  './../shared/question.model'
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {QData} from '../shared/qdata.model'
import {Edata} from '../shared/edata.model'
@Injectable({
  providedIn: 'root'
})
export class QdbService {

  constructor(private http:HttpClient) { }
  
  baseUrl=environment.baseUrl
  check():Observable<Question>{
    return this.http.get<Question>(`${this.baseUrl}/qdata`)
  }
  
  adddata(data:QData,topic:string):Observable<JSON>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<JSON>(`${this.baseUrl}/qdata/${topic}`,data,httpOptions).pipe(catchError(this.handleError))
  }
  deletedata(ref:string):Observable<JSON>{
    return this.http.get<JSON>(`${this.baseUrl}/qdata/delete/${ref}`)
  }

  getqbytid(tid:string):Observable<Question>{
    return this.http.get<Question>(`${this.baseUrl}/qdata/${tid}`)

  }
  getRefByTopicid(tid:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/qdataTID/${tid}`)
  }

  getQuestions(tid:string,ref:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/qdataTID/${tid}/${ref}`)
  }

  getCountByIdRef(tid:string,ref:string,question:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/surveydata/${tid}/${ref}/${question}`)
  }

  getOptions(tid:string,ref:string,question:string):Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}/surveydata/question/${tid}/${ref}/${question}`)
  }

  getTopicId():Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}/qdataTID`)
  }

  getSuggestions(tid:string,ref:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/surveydata/suggestions/${tid}/${ref}`)
  }

  getTextAnswers(tid:string,ref:string,question:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/surveydata/suggestions/${tid}/${ref}/${question}`)
  }

  getqbyref(ref:string):Observable<Edata>{
    return this.http.get<Edata>(`${this.baseUrl}/qdata/edit/${ref}`)
  }

  sendedittedq(eq:Edata):Observable<JSON>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<JSON>(`${this.baseUrl}/qdata/edit`,eq,httpOptions).pipe(catchError(this.handleError))
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
