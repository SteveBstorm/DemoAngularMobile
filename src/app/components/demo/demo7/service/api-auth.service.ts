import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor.model';
import { LoginForm, RegisterForm, User } from '../models/Registerform.model';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  currentUser : User

  private url : string = "https://localhost:44379/api/"

  constructor(
    private _httpClient : HttpClient
  ) { }

  register(newUser : RegisterForm) {
    this._httpClient.post(this.url+'auth/register', newUser).subscribe({
      next : () => console.log("Register OK"),
      error : (error) => console.log(error)
    })
  }

  login(loginInfo : LoginForm) {
    this._httpClient.post<User>(this.url+'auth/login', loginInfo).subscribe({
      next : (userFromAPI : User) => {
        this.currentUser = userFromAPI
        sessionStorage.setItem("token", this.currentUser.token)
        console.log(this.currentUser)
      },
      error : (error)=> console.log(error)
    })
  }

  getActor() : Observable<Actor[]> {
    let myHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : sessionStorage.getItem('token')
    })
    return this._httpClient.get<Actor[]>(this.url+'actor', {headers : myHeader})
  }
}
