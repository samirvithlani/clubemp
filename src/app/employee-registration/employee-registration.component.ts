import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  myForm:FormGroup
  
  employee_name:string="";
  employee_email:string="";
  constructor() { 
  }

  submit(){

      console.log('Name :-',this.myForm.value.employee_name)
      console.log('EMail:-',this.myForm.value.employee_email)
      console.log('employee name :-',this.myForm.get('employee_name').value)
      this.employee_name = this.myForm.value.employee_name;
      this.employee_email = this.myForm.value.employee_email;
      console.log(this.myForm)
  }
  ngOnInit(): void {


    this.myForm =new FormGroup({
       employee_name :new FormControl('',Validators.required),
       employee_email:new FormControl('') 

      
    })
  }

}
