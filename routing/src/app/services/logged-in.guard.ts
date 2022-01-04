import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class LogginGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isLoggedIn = this.authService.isLoggedIn();
        console.log('canActivate', isLoggedIn);
        return isLoggedIn;
    }

}
