import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  myProperty : string
  myNumber : Number
  myDate : Date = new Date()
  myBool : boolean

  constructor() { }

  ngOnInit(): void {
    this.myNumber = 5
    //setTimeout(() => this.myProperty = "On test les bindings", 3000)
  }

}
