import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginModule } from './user-login/user-login.module';
import { userRoutingModule } from './user-login/user-routing.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    NoPageComponent,
    AboutMeComponent,
    AboutCompanyComponent,
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
