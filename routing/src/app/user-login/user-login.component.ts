import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  disable=true;
  validcharter="valid";
  minumcharter="minium";
  ['requried']=true;
  myId: string | null | undefined;
  formvalid = new FormGroup ({
    first:new FormControl('',[Validators.required,Validators.minLength(6),Validators.max(15),Validators.pattern('[a-z A-Z]+$')]),
    last:new FormControl('',[Validators.required,Validators.min(2),Validators.maxLength(20),Validators.pattern('[a-zA-Z @.]+$')]),
    contact:new FormControl('',[Validators.required,Validators.pattern('[0-9]+$'),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('[a-zA-Z @.]+$') ]),
    password:new FormControl('',[Validators.required,Validators.maxLength(18),Validators.minLength(2),Validators.pattern('[a-zA-Z @ 0-9 ]+$'),]),

  })

 constructor() {
   // alert('valid form ')
 }
 
 ngOnInit(): void {
   // alert('Sign up page')
 }
 
 formlogin(): void{
   localStorage.setItem("formData",JSON.stringify(this.formvalid.value))
   console.log(this.formvalid.value)
   this.myId =localStorage.getItem('formData')
 }
 display(): void{
 }
 get form() { return this.formvalid.controls; }

 get first(){
   return this.formvalid.get('first')
 }
 get last(){
   return this.formvalid.get('last')
 }
 get contact(){
   return this.formvalid.get('contact')
 }
 get email(){
   return this.formvalid.get('email')
 }
 get password(){
   return this.formvalid.get('password')
 }
 clear(formvalid:any){
   console.log(formvalid=this.clear)
   
 }


}
