import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  userList : User[]

  constructor(
    private _userService : UserService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this.userList = this._userService.users
  }

  addNew() {
    this._router.navigate(['/exo/exo3/add'])
  }

  deleteUser(index : number){
    this._userService.removeUser(index)
  }

  updateUser(index : number) {
    this._router.navigate(['/exo/exo3/update/'+index])
  }

}
