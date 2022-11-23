import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { DetailComponent } from './detail111/detail.component';
import { ListComponent } from './list/list.component';
import { SignUpComponent } from './sign-up.component';
import { DataDetailComponent } from './data-detail/data-detail.component';


@NgModule({
  declarations: [
    DetailComponent,
    ListComponent,
    SignUpComponent,
    DataDetailComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule
  ],
  exports:[
    DetailComponent,
    ListComponent,
    SignUpComponent,
    DataDetailComponent,
  ]
})
export class SignUpModule { }
