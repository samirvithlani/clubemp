import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getEmployee():Observable<any>{

    return this.http.get('http://localhost:8080/employee/viewEmployee')
  }
  addEmployee(model):Observable<any>{

    console.log(model)
    return this.http.post('http://localhost:8080/employee/addEmployee',model)
  }
}
