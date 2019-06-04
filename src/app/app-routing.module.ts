import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmpNewUserComponent } from './cmp-new-user/cmp-new-user.component'
import { CmpAuthComponent } from './cmp-auth/cmp-auth.component';
import { AuthGuard } from './services/aut-guard.service';
import { CmpDocComponent } from './cmp-doc/cmp-doc.component';
import { CmpDetailedDocComponent } from './cmp-detailed-doc/cmp-detailed-doc.component';

const routes: Routes = [ { path: 'new-user', component: CmpNewUserComponent },
{ path: 'auth', component: CmpAuthComponent },
{ path: 'doc', canActivate:[AuthGuard], component: CmpDocComponent},
{ path: 'detailed-doc', canActivate:[AuthGuard],component: CmpDetailedDocComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
