import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userFG : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this.userFG = this._builder.group({
      pseudo : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      dateNaiss : [null, [Validators.required, this.notBefore(new Date(1970,1,1))]],
      games : this._builder.array([]),
      mangas : this._builder.array([])
    })
  }

  onSubmit(){
    const newUser = new User()
    let formValue = this.userFG.value
    newUser.pseudo = formValue['pseudo']
    newUser.email = formValue['email']
    newUser.dateNaiss = formValue['dateNaiss'] 
    newUser.games = formValue['games'] ? formValue['games'] : []
    newUser.mangas = formValue['mangas'] ? formValue['mangas'] : []
    
    this._userService.addUser(newUser)
  }

  getMangas() {
    return this.userFG.get('mangas') as FormArray
  }

  onAddManga() {
    const newMangaControl = this._builder.control('', Validators.required)
    this.getMangas().push(newMangaControl)
  }

  removeManga(index : number) {
    this.getMangas().removeAt(index)
  }

  getGames() {
    return this.userFG.get('games') as FormArray
  }

  onAddGame() {
    const newGameControl = this._builder.control('', Validators.required)
    this.getGames().push(newGameControl)
  }

  removeGame(index : number) {
    this.getGames().removeAt(index)
  }

  notBefore(date : Date) : ValidatorFn {
    return(control : FormControl) => {
      let dateToTest = new Date(control.value)
      if(control.value == null) return null
      if(dateToTest.getTime() < date.getTime()) {
        return {dateError : "La date doit être supérieur au 1/1/1970"}
      }
      return null
    }
  }

}
