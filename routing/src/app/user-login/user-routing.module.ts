import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login.component';

const newLocal = 'user-login';
const routes: Routes = [
  {
    path:'**',
    component:UserLoginComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userRoutingModule {
  myId:any='data';

}
