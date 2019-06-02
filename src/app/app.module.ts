import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpAuthComponent } from './cmp-auth/cmp-auth.component';
import { CmpNewUserComponent } from './cmp-new-user/cmp-new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CmpDocComponent } from './cmp-doc/cmp-doc.component';
import { AuthGuard } from './services/aut-guard.service';
import { AuthService } from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    CmpAuthComponent,
    CmpNewUserComponent,
    CmpDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
