import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-udpate-user',
  templateUrl: './udpate-user.component.html',
  styleUrls: ['./udpate-user.component.scss']
})
export class UdpateUserComponent implements OnInit {

  userFG : FormGroup
  currentUser = new User()
  index : number

  constructor(
    private _builder : FormBuilder,
    private _userService : UserService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.index = this._activatedRoute.snapshot.params['id']
    this.currentUser = this._userService.getUser(this.index);
    this.userFG = this._builder.group({
      pseudo : [this.currentUser.pseudo, Validators.required],
      email : [this.currentUser.email, [Validators.required, Validators.email]],
      dateNaiss : [this.currentUser.dateNaiss, [Validators.required, this.notBefore(new Date(1970,1,1))]],
      games : this._builder.array([]),
      mangas : this._builder.array([])
    })

    if(this.currentUser.games && this.currentUser.games.length > 0) 
    {
      for(let i = 0; i<= this.currentUser.games.length-1; i++) 
      {
        this.getGames().push(new FormControl(this.currentUser.games[i], [Validators.required]))
      }
    }

    if(this.currentUser.mangas && this.currentUser.mangas.length > 0) 
    {
      for(let i = 0; i<= this.currentUser.mangas.length-1; i++) 
      {
        this.getMangas().push(new FormControl(this.currentUser.mangas[i], [Validators.required]))
      }
    }


  }

  onSubmit(){
    const newUser = new User()
    let formValue = this.userFG.value
    newUser.pseudo = formValue['pseudo']
    newUser.email = formValue['email']
    newUser.dateNaiss = formValue['dateNaiss'] 
    newUser.games = formValue['games'] ? formValue['games'] : []
    newUser.mangas = formValue['mangas'] ? formValue['mangas'] : []
    
    this._userService.updateUser(this.index, newUser)
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
