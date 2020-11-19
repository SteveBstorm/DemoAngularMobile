import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  formGroup : FormGroup

  constructor(
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this._builder.group({
      nom : [null, Validators.required],
      mail : [null, [Validators.required, Validators.email]],
      dateNaiss : [null, this.notBefore(new Date(1970,1,1))],
      films : this._builder.array([])
    })
  }

  onSubmit(){
    const newContact = new Contact()
    let formValue = this.formGroup.value
    newContact.name = formValue['nom']
    newContact.email = formValue['mail']
    newContact.birthDate = formValue['dateNaiss'] 
    newContact.films = formValue['films'] ? formValue['films'] : []
    console.log(newContact)
  }

  getFilms() {
    return this.formGroup.get('films') as FormArray
  }

  onAddFilm() {
    const newFilmControl = this._builder.control('', Validators.required)
    this.getFilms().push(newFilmControl)
  }

  removeC(index : number) {
    this.getFilms().removeAt(index)
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

export class Contact{
  name : string
  email : string
  birthDate : Date
  films? : string[]
}
