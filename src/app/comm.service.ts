import { Injectable } from '@angular/core';
import {SurveyData} from './shared/surveydata.model'
import {PageData} from './shared/pagedata.model'
@Injectable({
  providedIn: 'root'
})
export class CommService {
 
  currentpage:number;
  pagedata:PageData;
  surveydata:SurveyData=
    {name:'',
          organisation:'',
          responsibility:'',
          mobile:'',
          email:'',
          survey:[]}
  
  page1data:PageData;
  page2data:PageData;
  constructor() { }
}
