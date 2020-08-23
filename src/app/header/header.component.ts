import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private commservice: CommService,private router:Router) { }
  name: string;
  organisation: string;
  responsibility: string;
  email: string;
  phoneno: string;

  ngOnInit(): void {
      this.commservice.currentpage=1;
  }
  seedata() {
  
    this.commservice.surveydata={
          name:this.name,
          organisation:this.organisation,
          responsibility:this.responsibility,
          mobile:this.phoneno,
          email:this.email,
          survey:[]
    };
    this.router.navigate(['page1']);
  }

}
