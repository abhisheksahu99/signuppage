import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  apiUrl='http://dummy.restapiexample.com/api/v1/employees';
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

}
