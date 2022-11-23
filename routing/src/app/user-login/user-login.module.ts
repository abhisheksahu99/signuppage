import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { RouterModule, } from '@angular/router';
import { UserLoginComponent } from './user-login.component';


@NgModule({
  declarations: [
    ListPageComponent,
    DetailPageComponent,
    UserLoginComponent,
   

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

  ],
  exports:[
    ListPageComponent,
    DetailPageComponent,
    UserLoginComponent,
  ]
})
export class UserLoginModule { }
