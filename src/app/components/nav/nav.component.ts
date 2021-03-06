import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  Links : Link[]

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
    this.Links = [
      {url : '/home', title : 'Home'},
      {url : '/about', title : 'About'},
      {title : 'Demos', children : [
        {url : '/demo/demo1', title : 'Demo 1 - Bindings'},
        {url : '/demo/demo2', title : 'Demo 2 - Event Bindings'},
        {url : '/demo/demo3', title : 'Demo 3 - Pipes'},
        {url : '/demo/demo4', title : 'Demo 4 - Directives'},
        {url : '/demo/demo5', title : 'Demo 5 - Services'},
        {url : '/demo/demo6', title : 'Demo 6 - Formulaires'},
        {url : '/demo/demo7', title : 'Demo 7 - Conso API'},
        {url : '/demo/demo7/login', title : 'Login'},
        {url : '/demo/demo7/register', title : 'Register'},
      ]},
      {title : 'Exercices', children : [
        {url : '/exo/exo1', title: 'Chronomètre'},
        {url : '/exo/exo2', title: 'Shopping'},
        {url : '/exo/exo3', title: 'Crud User'},
      ]}
    ]
  }
  toggleVisible(index : number) {
    this.Links[index].isVisible = !this.Links[index].isVisible
  }
}
