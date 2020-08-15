import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { HttpemployeeComponent } from './httpemployee/httpemployee.component';
import { DummyComponent } from './dummy/dummy.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmpregapiComponent } from './empregapi/empregapi.component';
import { BarchartComponent } from './barchart/barchart.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { SocialloginComponent } from './sociallogin/sociallogin.component';


const routes: Routes = [
  { path: 'emp', component: EmpComponent },
  { path: 'empdetail/:eId', component: EmpDetailComponent },
  { path: 'httpemployee', component: HttpemployeeComponent },
  { path: 'dummy', component:DummyComponent },
  {path:'empreg',component:EmployeeRegistrationComponent},
  {path:'empregapi',component:EmpregapiComponent},
  {path:'formsdemo',component:FormsDemoComponent},
  {path:'barchart',component:BarchartComponent},
  {path:'login',component:SocialloginComponent},
  {path:'parent',component:ParentComponent,children:[
    {path:"child1",component:Child1Component},
    {path:"child2",component:Child2Component},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
