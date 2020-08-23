import { AuthGuard } from './_helpers/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LginmodalComponent } from './lginmodal/lginmodal.component';

const routes: Routes = [
    {
      path:'',
      component:HeaderComponent,
      pathMatch:'full'
    },
    {
      path:'page1',
      component:Page1Component
    },
    {
      path:'page2',
      component:Page2Component
    },
    {
      path:'redirect',
      redirectTo:'page2',
      pathMatch:'full'
    },
    {
      path:'login',
      component:LginmodalComponent
    },
    {
      path:'admin',
      loadChildren: ()=>import("./admin/admin.module").then(m=>m.AdminModule),
      canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
