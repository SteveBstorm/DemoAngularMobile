import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { TotimePipe } from './pipes/totime.pipe';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Exo3Component } from './components/exercices/exo3/exo3.component';
import { DetailsComponent } from './components/exercices/exo3/details/details.component';
import { NewUserComponent } from './components/exercices/exo3/new-user/new-user.component';
import { UdpateUserComponent } from './components/exercices/exo3/udpate-user/udpate-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    TotimePipe,
    ExercicesComponent,
    Exo1Component,
    Demo4Component,
    HighlightDirective,
    Demo5Component,
    Exo2Component,
    Demo6Component,
    Exo3Component,
    DetailsComponent,
    NewUserComponent,
    UdpateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
