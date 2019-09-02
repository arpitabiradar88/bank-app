import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User }  from '../models/user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';


  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
  	return this.http.get<User[]>(this.serviceUrl);
  }

   getUserInfo() {
  	return JSON.parse(localStorage.getItem('fav'));
  }

    setUserInfo = (data) =>{
  	localStorage.setItem('fav',JSON.stringify(data))
  }
}
