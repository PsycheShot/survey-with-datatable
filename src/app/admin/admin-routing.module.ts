<<<<<<< HEAD
import { LginmodalComponent } from './../lginmodal/lginmodal.component';
=======
import { DataReportComponent } from './data-report/data-report.component';
>>>>>>> repo-a/master
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { QcrudComponent } from './qcrud/qcrud.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'qcrud',
        component:QcrudComponent
      },
<<<<<<< HEAD
    ]
  },
  {
    path:'login',
    component:LginmodalComponent
=======
      {
        path:'datareport',
        component:DataReportComponent
      }
    ]
>>>>>>> repo-a/master
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
