import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  data:any;
  employee:Array<any>=[];
  eNames = [];
  eSalary=[];
  

  constructor(private service:DataService) { 


    
   
}





  ngOnInit(): void {


   
  /* ****************************** */

    this.service.getEmployee().subscribe(res=>{

    this.employee = res;
      
    this.employee = res;

    this.eNames = this.employee.map(i=>i.eName)
    console.log("---",this.employee.map(i=>i.eName))
    this.eSalary = this.employee.map(i=>i.eSalary)
    this.data = {
      
      labels: ["sam","raj","abcd"],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [this.eSalary]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [this.eSalary]
          }
      ]
    }
   
    })

    
    
  }



  

}
