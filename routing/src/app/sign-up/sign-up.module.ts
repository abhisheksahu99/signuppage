import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { DetailComponent } from './detail111/detail.component';
import { ListComponent } from './list/list.component';
import { SignUpComponent } from './sign-up.component';
import { HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    DetailComponent,
    ListComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule
  ],
  exports:[
    DetailComponent,
    ListComponent,
    DetailComponent,
    HttpClientModule,
    SignUpComponent,
  ]
})
export class SignUpModule { }
