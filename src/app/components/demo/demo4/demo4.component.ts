import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {


  maVar : string;

  isToggled : boolean;

  liste : string[]

  constructor() {      
    }


  ngOnInit(): void {
    this.isToggled = false
    this.liste = ['Pomme', 'Voiture', 'truc', 'machin']
  }

  toggle() {
    this.isToggled = !this.isToggled
  }

}
