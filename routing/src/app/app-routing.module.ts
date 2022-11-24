import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './sign-up/detail111/detail.component';
import { ListComponent } from './sign-up/list/list.component';

const routes: Routes = [
  {
    path:'list',
    component:ListComponent,
  },
  {
    path:'detail',
    component:DetailComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
