import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../models/Registerform.model';
import { ApiAuthService } from '../service/api-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _authService : ApiAuthService
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      lastName : ['', Validators.required],
      firstName : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
    })
  }

  onSubmit(){
    const newUser = new RegisterForm()
    const formValues = this.fg.value
    newUser.lastName = formValues['lastName']
    newUser.firstName = formValues['firstName']
    newUser.email = formValues['email']
    newUser.passwd = formValues['password']

    this._authService.register(newUser)
  }

}
