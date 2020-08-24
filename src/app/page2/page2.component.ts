import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service'
import { PageData } from '../shared/pagedata.model'
import { McqData } from '../shared/mcqdata.model'
import { RefData } from '../shared/refdata.model'
import {RespData} from '../shared/respdata.model'
import {Router} from '@angular/router';
import {DbacessService} from '../db/dbacess.service'
import { SurveyData } from '../shared/surveydata.model';
import {QdbService} from '../admin/services/qdb.service'
import {Question} from '../admin/shared/question.model'
import {Query} from '../admin/shared/query.model'
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private commservice:CommService,private router:Router,private db:DbacessService,private qdb:QdbService) { }
  ques:Question;
  q:RefData[]=[];

  ngOnInit(): void {
    this.commservice.currentpage=3;
    this.qdb.getqbytid("1002").subscribe(resp=>{
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
    
  }


  kickdata() {
    
    this.commservice.page2data={
      topicid:"1002",
      topicname:"Foundational Literacy and Numeracy (FLN)",
      data:this.q
    }
    // let s=this.commservice.surveydata.length;
    this.commservice.surveydata.survey.push(this.commservice.page2data);
    console.log(this.commservice.surveydata)
    this.db.dumpsurvey(this.commservice.surveydata).subscribe(
      (data:SurveyData)=>{
        console.log(data);
      },
      (error:any)=>console.log(error)
    )
    console.log("I think it worked");
    this.commservice.currentpage=1;
    this.router.navigate(['']);
  }

}
