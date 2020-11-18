import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus : boolean = false;

  constructor(private _router : Router) { }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this.authStatus = true
          if(this.authStatus) {
             resolve("connecté")
            }
          else reject("connexion échouée")
        }, 2000)
      }
    )
  }

  signOut(){
    this.authStatus = false
  }
}
