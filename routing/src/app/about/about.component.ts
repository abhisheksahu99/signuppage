import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() myInput:string|undefined="";
  @Output() myOutput:EventEmitter<string>=new EventEmitter();
  outputString:any="its is a component";
  lofi:string | undefined="hello";
  value:any={name:"peter",email:"you"};

  constructor() {
    console.log("constructor called")
   }

  ngOnInit(): void {
    console.log(this.myInput);
  }

  sendData(): void{
    // console.log(this.outputString)
    this.myOutput.emit(this.outputString);
  }

  sendData1(call:any)
  {
    this.value=call.value
    console.log(call.value)
    // console.log(this.value=call.value)
    // this.value=call.value
  }

}
