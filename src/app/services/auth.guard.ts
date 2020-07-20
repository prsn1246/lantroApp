import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  userAuth: any;
  constructor(private router: Router) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let auth = localStorage.getItem('userAuth');
      console.log('about to route auth...', auth);
      if (!auth || auth == '0') { this.router.navigate(['/auth']); return false;}
        else if(auth == '1') return true; 
  }




}
