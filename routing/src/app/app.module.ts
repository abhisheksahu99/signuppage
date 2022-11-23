import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginModule } from './user-login/user-login.module';
import { userRoutingModule } from './user-login/user-routing.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginModule,
    ReactiveFormsModule,
    FormsModule,
    userRoutingModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
