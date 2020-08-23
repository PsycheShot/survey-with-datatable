
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CommService} from './comm.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'surveyapp';
  pagest:number=this.commservice.currentpage;
  
  constructor(private commservice:CommService){}
  
  pagech(val){
    // this.pagest=val.srcElement.innerText;
    this.pagest=this.commservice.currentpage;
    // console.log(this.pagest);
  }
  check(){
    console.log(this.commservice.surveydata); 
  }

}
