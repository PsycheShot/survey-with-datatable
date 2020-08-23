import { LginmodalComponent } from './../lginmodal/lginmodal.component';
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
    ]
  },
  {
    path:'login',
    component:LginmodalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
