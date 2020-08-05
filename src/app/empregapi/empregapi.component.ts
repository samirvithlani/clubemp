import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-empregapi',
  templateUrl: './empregapi.component.html',
  styleUrls: ['./empregapi.component.css']
})
export class EmpregapiComponent implements OnInit {

  constructor(private service:DataService) { }

  myForm:FormGroup;
  status:string="..";

  submit(){

    console.log(this.myForm)
    console.log("valu..",this.myForm.value)
    this.service.addEmployee(this.myForm.value).subscribe(res=>{

      if(res==1){
        console.log("data added..")
        this.status = "data Added"
      }
      else{
        this.status = "data Not added.."
      }

    },err=>{

          console.log("error...")
    })

  }
  ngOnInit(): void {

    this.myForm = new FormGroup(
      {
        eName:new FormControl(''),
        eEmail:new FormControl(''),
        ePassword:new FormControl(''),
        eSalary:new FormControl(''),
        eAge:new FormControl('')
    
      }
      
    )
  }

}
