import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  mavar1 : string = 'salut tout le monde !!!'
  mavar2 : number = 10
  mavar3 : Date = new Date()

  mavar4 : number = 243

  constructor() { }

  ngOnInit(): void {
  }

}
