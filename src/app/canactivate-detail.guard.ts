import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ItemsService } from './items.service';

@Injectable()
export class CanactivateDetailGuard implements CanActivate {
  constructor(public itemsService: ItemsService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const canActivate = this.itemsService.setCurrentItem(next.params.id);

    if (!canActivate) {
      this.router.navigate(['']);
    }

    return canActivate;
  }
}
