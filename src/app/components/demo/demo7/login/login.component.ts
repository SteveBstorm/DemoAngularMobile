import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '../models/Registerform.model';
import { ApiAuthService } from '../service/api-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _authService : ApiAuthService
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  onSubmit() {
    const loginInfo = new LoginForm()
    const formValues = this.fg.value
    loginInfo.email = formValues['email']
    loginInfo.passwd = formValues['password']

    this._authService.login(loginInfo)
  }

}
