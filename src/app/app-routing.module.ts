import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { LoginComponent } from './components/demo/demo7/login/login.component';
import { RegisterComponent } from './components/demo/demo7/register/register.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { DetailsComponent } from './components/exercices/exo3/details/details.component';
import { Exo3Component } from './components/exercices/exo3/exo3.component';
import { NewUserComponent } from './components/exercices/exo3/new-user/new-user.component';
import { UdpateUserComponent } from './components/exercices/exo3/udpate-user/udpate-user.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "about", component : AboutComponent},
  { path : "demo", component : DemoComponent, children : [
    { path : "demo1", component : Demo1Component},
    { path : "demo2", component : Demo2Component},
    { path : "demo3", component : Demo3Component},
    { path : "demo4", component : Demo4Component},
    { path : "demo5", component : Demo5Component},
    { path : "demo6", component : Demo6Component},
    { path : "demo7", component : Demo7Component},
    { path : "demo7/login", component : LoginComponent},
    { path : "demo7/register", component : RegisterComponent}
  ]},
  { path : "exo", component : ExercicesComponent, children : [
    {path : "exo1", canActivate : [AuthGuardService] , component : Exo1Component},
    {path : "exo2", component : Exo2Component},
    {path : "exo3", component : Exo3Component},
    {path : "exo3/add", component : NewUserComponent},
    {path : "exo3/update/:id", component : UdpateUserComponent},
    {path : "exo3/details/:id", component : DetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
