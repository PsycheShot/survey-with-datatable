import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommService } from '../comm.service'
import { PageData } from '../shared/pagedata.model'
import { McqData } from '../shared/mcqdata.model'
import { RefData } from '../shared/refdata.model'
import {RespData} from '../shared/respdata.model'
import {Router} from '@angular/router';
import {QdbService} from '../admin/services/qdb.service'
import {Question} from '../admin/shared/question.model'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private commservice: CommService,private router: Router,private qdb:QdbService) { }
  ques:Question;
  q:RefData[]=[];
  
  ngOnInit(): void {
    this.qdb.getqbytid("1001").subscribe(resp=>{
      // console.log(resp)
      this.ques=resp[0];
      // console.log(this.ques);
      for(let i=0;i<this.ques.data.length;i++){
        var temp:McqData[]=[];
        for(let j=0;j<this.ques.data[i].questions.length;j++){
            temp.push({
              question:this.ques.data[i].questions[j].question,
              options:this.ques.data[i].questions[j].options,
              answer:0,
              textanswer:"",
              allowtextanswer:this.ques.data[i].questions[j].allowTextAnswer
            })
        }
        this.q.push({
          ref:this.ques.data[i].ref,
          descr:this.ques.data[i].desc,
          response:{
            suggestion:"",
            mcq:temp
          }
        })
      } 
      console.log(this.q)
    });
    
    this.commservice.currentpage=2;
  }

  kickdata() {
    this.commservice.page1data={
      topicid:"1001",
      topicname:"Early Childhood Care & Education (ECCE)",
      data:this.q
    }
    console.log(this.commservice.page1data);
    this.commservice.surveydata.survey.push(this.commservice.page1data);
    this.commservice.currentpage=1;
    window.scroll(0,0);
    this.router.navigate(['/page2']);
  }


}
