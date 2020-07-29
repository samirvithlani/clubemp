import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private service:DataService) { }

  employee:Array<any>=[];
  status:string;

  ngOnInit(): void {

    this.service.dummyemployee().subscribe(res=>{

      console.log(res)
      this.status = res.status;
      this.employee = res.data;
     

    })
  }

}
