import { Question } from './../shared/question.model';
import { QdbService } from './../services/qdb.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { RequiredValidator } from '@angular/forms';
declare const require: any;
require('default-passive-events');
@Component({
  selector: 'app-data-report',
  templateUrl: './data-report.component.html',
  styleUrls: ['./data-report.component.css']
})
export class DataReportComponent implements OnInit {
  
  operation;
  operate;
  oper;
  topicName:string[] = [];
  topicId:string[]=[];
  ref:string[] = [];
  questions:string[]=[];
  count:number[]=[];
  options:string[]=[];
  test:string[]=[];
  suggestions:string[]=[];
  val:boolean;
  textAnswer:string[]=[];
  val2:boolean;
  constructor(
    private qdb:QdbService
  ) { }

  ngOnInit(): void {
    
    //console.log(this.operation)
    this.qdb.getTopicId().subscribe(resp=>{
      //console.log(resp)
      for(var topic of resp){
        this.topicName.push(topic.topicName)
        this.topicId.push(topic.topicID)
      }
      //console.log(this.topicId)
    })
    
  }

  onClickTop(){
    this.ref = []
    this.questions = []
    this.operate=""
    this.pieChart.dataTable = null
    this.val=undefined
    this.val2 = undefined
    this.suggestions=[]
    this.textAnswer=[]
    //console.log(this.operation)
    this.qdb.getRefByTopicid(this.operation).subscribe(resp=>{
      //console.log(resp)
      for(var obj of resp){
        this.ref.push(obj.data.ref)
      }
      //console.log(this.ref)

    }) 
    
    
  }

  onClickMiddle(){
    this.questions=[];
    this.oper = "";
    this.pieChart.dataTable = null
    this.val = undefined
    this.val2 = undefined
    this.suggestions =[];
    this.textAnswer = [];
    //console.log(this.ref[this.operate])
    this.qdb.getQuestions(this.operation,this.ref[this.operate]).subscribe(resp=>{
      //console.log(resp)
      for(var obj of resp){
        this.questions.push(obj.data.questions.question)
      }
      //console.log(this.questions)
    })

  }

  onClickBottom(){
    
    this.count = [];
    this.qdb.getCountByIdRef(this.operation,this.ref[this.operate],this.questions[this.oper]).subscribe(resp=>{
      //console.log(resp)
      //console.log(Object.keys(resp).length)
      for(var i = 0; i<Object.keys(resp).length; i++){
        this.count.push(Number(resp[String(i)]))
      }
      //console.log(this.count)
      
    })

    this.qdb.getOptions(this.operation,this.ref[this.operate],this.questions[this.oper]).subscribe(resp=>{
      //console.log(resp)
      
      for(var option of resp){
        this.test.push(option.data.questions.options)
      }
      //console.log(this.options)
      
      this.pieChart.dataTable = null
    
    })
    
    this.suggestions=[];
    this.val = undefined
    this.qdb.getSuggestions(this.operation,this.ref[this.operate]).subscribe(resp=>{
      //console.log(resp)
      for(var i = 0; i<resp[0].fieldN.length; i++){
        if(resp[0].fieldN[i]!=""){
          this.suggestions.push(resp[0].fieldN[i])
        }
      }
      if(this.suggestions.length==0){
        this.val = false;
        
      }
      else{
        this.val = true;
      }
      //console.log(this.suggestions)
    })

    

    this.options = [];
    this.qdb.getOptions(this.operation,this.ref[this.operate],this.questions[this.oper]).subscribe(resp=>{
      //console.log(resp)
      
      for(var option of resp){
        this.options.push(option.data.questions.options)
      }
      //console.log(this.options)
      
      this.makeChart()
      
    })
    this.val2 = undefined
    this.textAnswer=[]
    this.qdb.getTextAnswers(this.operation,this.ref[this.operate],this.questions[this.oper]).subscribe(resp=>{
      //console.log(resp)
      for(var i = 0; i<resp[0].fieldN.length; i++){
        if(resp[0].fieldN[i]!=""){
          this.textAnswer.push(resp[0].fieldN[i])
        }
      }
      if(this.textAnswer.length==0){
        this.val2 = false;
        
      }
      else{
        this.val2 = true;
      }
      //console.log(this.textAnswer)

    })

    
  }

  makeChart(){
    const chartData:any =[['Options', 'Count']];
    for(var i = 0; i<this.options.length;i++){
      chartData.push([this.options[i],this.count[i]]);
    }
    //console.log(this.pieChart.dataTable)
    this.drawChart(chartData);
  
  }
  drawChart(chartData){
    
    this.pieChart = {
      chartType: 'PieChart',
      dataTable:chartData,
      //firstRowIsData: true,
      options: {'title': `${this.questions[this.oper]}`,'width':450, 'height':400},
    };
   
  }
  public pieChart: GoogleChartInterface={
    chartType: 'PieChart',
    dataTable:null,
    //firstRowIsData: true,
    options: {'title': `${this.questions[this.oper]}`,'width':400, 'height':400},
  };


  
 
  

  
  
}
