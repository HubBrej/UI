import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmpNewUserComponent } from './cmp-new-user/cmp-new-user.component'
import { CmpAuthComponent } from './cmp-auth/cmp-auth.component';
import { AuthGuard } from './services/aut-guard.service';
import { CmpDocComponent } from './cmp-doc/cmp-doc.component';

const routes: Routes = [ { path: 'new-user', component: CmpNewUserComponent },
{ path: 'auth', component: CmpAuthComponent },
{ path: 'doc', canActivate:[AuthGuard],component: CmpDocComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
