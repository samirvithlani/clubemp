import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  constructor(private route :ActivatedRoute,private service:DataService) { }

  employee:Employee;
  ngOnInit(): void {

    var eId = this.route.snapshot.params.eId;
    this.service.viewById(eId).subscribe(res=>{

      this.employee = res;
      console.log("res -->",res)
    })
    console.log(this.route.snapshot.params.eId) //4
    
  }

}
