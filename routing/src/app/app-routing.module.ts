import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './sign-up/detail111/detail.component';
import { ListComponent } from './sign-up/list/list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path:'sign-up',
    component:SignUpComponent,
  },
  {
    path:'list',
    component:ListComponent,
  },
  {
    path:'list/:id',
    component:DetailComponent,
  },
  {
    path:'user',
    component:UserLoginComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
