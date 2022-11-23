import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { UserLoginComponent } from './user-login.component';

const newLocal = 'user-login';
const routes: Routes = [
  {
    path:'list1',
    component:ListPageComponent,
  },
  {
    path:'detail1',
    component:DetailPageComponent,
  },
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
