import { Component, OnInit } from '@angular/core';
import { Actor } from './models/actor.model';
import { ApiAuthService } from './service/api-auth.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  listActor : Actor[]

  constructor(
    private _service : ApiAuthService
  ) { }

  ngOnInit(): void {
    this._service.getActor().subscribe(
      (listFromService : Actor[]) => this.listActor = listFromService,
      (error) => console.log(error)
    )
  }

}
