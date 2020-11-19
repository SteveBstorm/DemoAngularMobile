import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { TotimePipe } from './pipes/totime.pipe';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
