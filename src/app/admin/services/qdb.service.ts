import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import {Question} from  './../shared/question.model'
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
<<<<<<< HEAD

=======
import {QData} from '../shared/qdata.model'
import {Edata} from '../shared/edata.model'
>>>>>>> repo-a/master
@Injectable({
  providedIn: 'root'
})
export class QdbService {

  constructor(private http:HttpClient) { }
<<<<<<< HEAD

=======
  
>>>>>>> repo-a/master
  baseUrl=environment.baseUrl
  check():Observable<Question>{
    return this.http.get<Question>(`${this.baseUrl}/qdata`)
  }
  
<<<<<<< HEAD
  adddata(data:Question):Observable<Question>{
=======
  adddata(data:QData,topic:string):Observable<JSON>{
>>>>>>> repo-a/master
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
<<<<<<< HEAD
    return this.http.post<Question>(`${this.baseUrl}/qdata`,data,httpOptions).pipe(catchError(this.handleError))
=======
    return this.http.post<JSON>(`${this.baseUrl}/qdata/${topic}`,data,httpOptions).pipe(catchError(this.handleError))
  }
  deletedata(ref:string):Observable<JSON>{
    return this.http.get<JSON>(`${this.baseUrl}/qdata/delete/${ref}`)
>>>>>>> repo-a/master
  }

  getqbytid(tid:string):Observable<Question>{
    return this.http.get<Question>(`${this.baseUrl}/qdata/${tid}`)

  }
<<<<<<< HEAD

=======
>>>>>>> repo-a/master
  getRefByTopicid(tid:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/qdataTID/${tid}`)
  }

<<<<<<< HEAD
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

=======
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
>>>>>>> repo-a/master
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
