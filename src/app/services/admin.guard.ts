import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {FirebaseSignUpService} from "./firebase.sign-up.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private firebaseService:FirebaseSignUpService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if (this.firebaseService.isLoggedIn) {
      return true
    } else {
      alert('нет доступа к странице '+ route.url)
      console.log('loggedIn: '+ this.firebaseService.isLoggedIn)
      console.log('state: '+ state)
      return false
    }
  }
}
