import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lginmodal',
  templateUrl: './lginmodal.component.html',
  styleUrls: ['./lginmodal.component.css']
})
export class LginmodalComponent implements OnInit {

  constructor(private router: Router) { }
  username:string;
  password:string;
  ngOnInit(): void {
  }
  check(){
    this.router.navigate(['/admin']);
  }

}
