import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor() { }

  title = 'employee';
  employeeName: string = "rajvir";
  employee: Array<any> = [];
  tempemployee:Array<any>=[];
  sortname:string = "ase";

  userName: string;

  filterData(value){

    console.log("function called..",value)
    this.employee = this.tempemployee.filter(i=>i.name.toLowerCase().indexOf(value.toLowerCase())!= -1);
  }

  sort() {

    console.log("sort function called..")
    
    this.employee = this.tempemployee.sort((i,j)=>(i.name > j.name)? 1 :-1)
  }
  ngOnInit(): void {

    this.employee = [

      { name: 'samir', salary: 10000, email: 'samir@gmail.com', status: false },
      { name: 'dhaval', salary: 100000, email: 'dhaval@gmail.com', status: true },
      { name: 'priynka', salary: 1000000, email: 'priyanka@gmail.com', status: true },
    ];
    this.tempemployee =this.employee;
  }

}
