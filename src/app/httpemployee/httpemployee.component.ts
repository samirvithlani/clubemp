import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-httpemployee',
  templateUrl: './httpemployee.component.html',
  styleUrls: ['./httpemployee.component.css']
})
export class HttpemployeeComponent implements OnInit {

  constructor(private service: DataService) { }
  employee: Array<Employee> = [];
  employee1:Employee;
  resStatus:number;

  addEmployee(){

    this.employee1=
    { eId: 101, eName: 'dhaval', eEmail: 'dhaval@gmail.com', eAge: 22, ePassword: '123@dhaval', eSalary: 125000 }
    this.service.addEmployee(this.employee1).subscribe(res => {
      
      this.resStatus = res;
      if(this.resStatus ==1){
        console.log("data added...")
      }
      else{
        console.log("data not added...")
      }
      
    })
    this.service.getEmployee().subscribe(res => {

      this.employee = res;
      console.log(res)
    })



  }

  ngOnInit(): void {

    //add
    
    //list    
    this.service.getEmployee().subscribe(res => {

      this.employee = res;
      console.log(res)
    })

  }

}
