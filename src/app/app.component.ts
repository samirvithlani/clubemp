import { Component } from '@angular/core';

//decor
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  employeeName:string ="rajvir";

  employee:Array<any>=[

    {name:'samir',salary:10000,email:'samir@gmail.com',status:false},
    {name:'dhaval',salary:100000,email:'dhaval@gmail.com',status:true},
    {name:'priynka',salary:1000000,email:'priyanka@gmail.com',status:true},
  ];
}
