import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';


const routes: Routes = [
  { path: 'emp', component: EmpComponent },
  { path: 'empdetail', component: EmpDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
