import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  nombre : number = 0

  isEnabled : boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.nombre++
  }

  decrease() {
    this.nombre--
  }

}
