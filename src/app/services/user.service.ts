import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTable } from '../Model/UserTable';

 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Using Depedency Injection We have to inject the HttpClient Class as a Module in
  //the service
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
 

  baseURL: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) {

 

  }
  //Get All the Users
  getAllUsers() {
    return this._http.get<UserTable[]>(this.baseURL);
  }

  addUser(user){
    return this._http.post<UserTable>(this.baseURL,JSON.stringify(user),this.httpOptions);
  }

 

}