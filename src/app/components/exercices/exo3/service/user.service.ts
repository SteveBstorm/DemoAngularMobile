import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = []

  constructor(
    private _router : Router
  ) { }

  addUser(u : User) {
    this.users.push(u)
    this._router.navigate(['/exo/exo3'])
  }

  getUser(index : number){
    return this.users[index]
  }

  removeUser(index : number) {
    this.users.splice(index, 1)
  }

  updateUser(index : number, u : User) {
    this.users[index] = u 
    this._router.navigate(['/exo/exo3'])
  }
}
