import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId:any="";
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("user id is",this.router.snapshot.paramMap.get("id") );
    this.userId=this.router.snapshot.paramMap.get("id")
  }
  
}
