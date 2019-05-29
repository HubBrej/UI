import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmpNewUserComponent } from './cmp-new-user/cmp-new-user.component'
import { CmpAuthComponent } from './cmp-auth/cmp-auth.component';

const routes: Routes = [ { path: 'new-user', component: CmpNewUserComponent },
{ path: 'auth', component: CmpAuthComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
