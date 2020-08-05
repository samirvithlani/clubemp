import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {

    return this.http.get('http://localhost:8080/employee/viewEmployee')
  }
  addEmployee(model): Observable<any> {

    console.log(model)
    return this.http.post('http://localhost:8080/employee/addEmployee', model)
  }
  
  addEmployee1(model): Promise<any> {

    console.log(model)
    return this.http.post('http://localhost:8080/employee/addEmployee', model).toPromise()
  }

  viewById(eId): Observable<any> {

    return this.http.get('http://localhost:8080/employee/viewEmployee/' + eId);
  }
  deleteemp(eId): Observable<any> {

    return this.http.delete('http://localhost:8080/employee/delete/' + eId);
  }

  dummyemployee():Observable<any>{

    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
  }
}
