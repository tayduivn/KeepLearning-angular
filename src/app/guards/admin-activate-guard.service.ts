import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminActivateGuard implements CanActivate{

  
  constructor(private auth: AuthService,
              private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.isAdmin().map( response => {
      if (response) return true;
      else {
        this.router.navigate(['/auth']);
        return false;
      }
    })
  }
  
}
