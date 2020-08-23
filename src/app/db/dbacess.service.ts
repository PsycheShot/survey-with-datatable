import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { SurveyData } from './../shared/surveydata.model'
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DbacessService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  checkserver(): Observable<JSON> {
    return this.http.get<JSON>(`${this.baseUrl}/surveydata`);
  }

  dumpsurvey(data: SurveyData): Observable<SurveyData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<SurveyData>(`${this.baseUrl}/surveydata`, data, httpOptions).pipe(catchError(this.handleError))
    
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
