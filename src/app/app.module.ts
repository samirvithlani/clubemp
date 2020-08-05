import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { MenuComponent } from './menu/menu.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { HttpemployeeComponent } from './httpemployee/httpemployee.component';
import { DummyComponent } from './dummy/dummy.component';
import {  ReactiveFormsModule,FormsModule} from "@angular/forms";
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';     
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { EmpregapiComponent } from './empregapi/empregapi.component';
import {ChartModule} from 'primeng/chart';
import { BarchartComponent } from './barchart/barchart.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    MenuComponent,
    EmpDetailComponent,
    HttpemployeeComponent,
    DummyComponent,
    EmployeeRegistrationComponent,
    EmpregapiComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    TableModule,
    ChartModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
