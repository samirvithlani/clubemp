import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';
import {MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-httpemployee',
  templateUrl: './httpemployee.component.html',
  styleUrls: ['./httpemployee.component.css'],
  providers: [MessageService]
})
export class HttpemployeeComponent implements OnInit {

  constructor(private service: DataService,private messageService:MessageService) { }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}
  employee: Array<Employee> = [];
  employee1: Employee;
  resStatus: number;

  update(eId){
    
    
  }
  delete(eId) {

    console.log(eId)
    this.service.deleteemp(eId).subscribe(res=>{

      this.messageService.add({severity:'warn', summary: 'warn', detail: 'deleted...'});
      if(res==1){
        console.log("data deleted")


        this.service.getEmployee().subscribe(res => {

          this.employee = res;
          console.log(res)
        })
        
      }
      else{
        console.log("data not deleted");
      }

    })

  }
  addEmployee() {

    this.employee1 =
      { eId: 101, eName: 'dhaval', eEmail: 'dhaval@gmail.com', eAge: 22, ePassword: '123@dhaval', eSalary: 125000 }
    this.service.addEmployee(this.employee1).subscribe(res => {

      this.resStatus = res;
      if (this.resStatus == 1) {
        console.log("data added...")
      }
      else {
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
