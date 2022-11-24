import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apiUrl='https://jsonplaceholder.typicode.com/users';
  apiData:any;
  constructor(private http:HttpClient)
  {
  
  }
  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((data)=>{
      console.warn(data)
      this.apiData=data
    })
  }
  
  title = 'routing';
  inputString="its a parent component";
  disable=false;
  count=0;
  show="123";
  color:any='red';
  color2:any='pink';
  data1:any={};
  
  getData(value:any): void{
    console.log(value);
  }
  myput(inputString:any){
    console.log(inputString.value)
  }

  userdetailes=[
    {name:'abhi',email:'abhi@gmail.com',phone:'9898757'},
    {name:'abhay',email:'abhay@gmail.com',phone:'989897757'},
    {name:'saksh',email:'saksh@gmail.com',phone:'989898657'},
    {name:'shibam',email:'shibam@gmail.com',phone:'98989556'},
    {name:'kunal',email:'kunal@gmail.com',phone:'9895458'},
  ]
  details=['abhi','kunal','sakhs','nimrat']


  counter(type:any)
  {
    type==="add"?this.count++:this.count--;
  }
  changecolor(show:any)
  {
    console.log(show)
    this.disable=show.value
  }
 
  forloop=['abhi','subha','kumar']

  loosssp=[
    {name:'abhiee',email:'abhi@gmail.com',socialAccou:['facfebook','googlfe','mafntra']},
    {name:'abhay',email:'abhay@gmail.com',socialAccou:['facfebowok','googlffe','manftra']},
    {name:'saksh',email:'saksh@gmail.com',socialAccou:['fjbdjbj','google','mantfra']},
    {name:'shib',email:'shibam@gmail.com',socialAccou:['facefffbook','google','mafntra']},
    {name:'kunal',email:'kunal@gmail.com',socialAccou:['facfebook','goe','manftra']},
  ]
 color4=true
 bgcolor='pink'
 color5='hotpink'

 updateColor(): void{
  this.color5='blue'
 this.bgcolor='aqua'
 }

 updateColor2(): void{
  this.color5='aqua'
 this.bgcolor='green'
 }
 
 submitData(submit:NgForm)
 {
  console.log(submit)
  this.data1=submit
 }
}

