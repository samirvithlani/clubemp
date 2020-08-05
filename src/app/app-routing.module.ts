import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { HttpemployeeComponent } from './httpemployee/httpemployee.component';
import { DummyComponent } from './dummy/dummy.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmpregapiComponent } from './empregapi/empregapi.component';
import { BarchartComponent } from './barchart/barchart.component';


const routes: Routes = [
  { path: 'emp', component: EmpComponent },
  { path: 'empdetail/:eId', component: EmpDetailComponent },
  { path: 'httpemployee', component: HttpemployeeComponent },
  { path: 'dummy', component:DummyComponent },
  {path:'empreg',component:EmployeeRegistrationComponent},
  {path:'empregapi',component:EmpregapiComponent},
  {path:'barchart',component:BarchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
