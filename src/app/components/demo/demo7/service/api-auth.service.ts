import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm, User } from '../models/Registerform.model';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  currentUser : User

  private url : string = "https://localhost:44379/api/auth/"

  constructor(
    private _httpClient : HttpClient
  ) { }

  register(newUser : RegisterForm) {
    this._httpClient.post(this.url+'register', newUser).subscribe({
      next : () => console.log("Register OK"),
      error : (error) => console.log(error)
    })
  }

  login(loginInfo : LoginForm) {
    this._httpClient.post<User>(this.url+'login', loginInfo).subscribe({
      next : (userFromAPI : User) => {
        this.currentUser = userFromAPI
        sessionStorage.setItem("token", this.currentUser.token)
        console.log(this.currentUser)
      },
      error : (error)=> console.log(error)
    })
  }
}
