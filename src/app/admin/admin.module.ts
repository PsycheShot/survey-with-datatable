import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component'
import { AdminRoutingModule } from './admin-routing.module';
import { QcrudComponent } from './qcrud/qcrud.component';
import {FormsModule} from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import {HttpClientModule} from '@angular/common/http';
import { DataReportComponent } from './data-report/data-report.component';
@NgModule({
  declarations: [AdminComponent, QcrudComponent, DataReportComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2GoogleChartsModule
  ]
})
export class AdminModule { }
