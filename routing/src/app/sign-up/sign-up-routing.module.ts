import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail111/detail.component';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
{
  path:'list',
  component:SignUpComponent,
  children:[
    {path:'detail', component:DetailComponent}
  ],
  
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
