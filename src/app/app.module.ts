import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { MenuComponent } from './menu/menu.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    MenuComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
