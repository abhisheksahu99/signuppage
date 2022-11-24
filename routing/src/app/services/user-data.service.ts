import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
   url = "http://dummy.restapiexample.com/api/v1/employees";
   url2 = "https://jsonplaceholder.typicode.com/users/";
  constructor(private http:HttpClient) { }
  getAllUsers()
  {
    return this.http.get(this.url2)
  }
  getUser(id:number)
  {

    return this.http.get(this.url2+id)
  }
}
