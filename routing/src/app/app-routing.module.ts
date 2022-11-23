import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './sign-up/detail111/detail.component';
import { ListComponent } from './sign-up/list/list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
// import { AboutCompanyComponent } from './about-company/about-company.component';
// import { AboutMeComponent } from './about-me/about-me.component';
// import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
// import { NoPageComponent } from './no-page/no-page.component';
// import { DetailPageComponent } from './user-login/detail-page/detail-page.component';
// import { ListPageComponent } from './user-login/list-page/list-page.component';
// import { SignUpComponent } from './user-login/sign-up/sign-up.component';
// import { UserLoginComponent } from './user-login/user-login.component';
// import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent,
  // },
  // {
  //   path:'about',
  //   component:AboutComponent,
  //   children:[
  //     {
  //       path:'about-company',
  //       component:AboutCompanyComponent,
  //     },
  //     {
  //       path:'about-me',
  //       component:AboutMeComponent,
  //     }
  //   ]
  // },
  // {
  //   path:'user/:id',
  //   component:UserComponent,
  // },
  // {
  //   path:'**',
  //   component:NoPageComponent,
  // },

  {
    path:'list',
    component:ListComponent,
  },
  {
    path:'detail22',
    component:DetailComponent,
  },
  {
    path:'**',
    component:UserLoginComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
