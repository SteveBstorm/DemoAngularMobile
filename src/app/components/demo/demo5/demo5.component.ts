import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  status : boolean

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.status = this._authService.authStatus
  }

  signIn() {
    this._authService.signIn().then(
      (data : string) => {
        console.log(data)
        this.status = this._authService.authStatus
      },
      (error) => console.log(error) 
    )
  }

  signOut() {
    this.status = false 
    this._authService.signOut()
  }

}
