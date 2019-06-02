import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CmpAuthComponent } from '../cmp-auth/cmp-auth.component';
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuth) {
            return true;
        } else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}