import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, } from '@angular/router';
import { UserLoginComponent } from './user-login.component';


@NgModule({
  declarations: [
    UserLoginComponent,
   

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

  ],
  exports:[
    UserLoginComponent,
  ]
})
export class UserLoginModule { }
