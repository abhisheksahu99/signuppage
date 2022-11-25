import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userData: any;
  users: any;

  constructor() { }

  ngOnInit(): void {
  }
  getUser(id:number|null|any): void{
    this.userData.getUser(id).subscribe((data: any)=>{
      console.warn("data",data);
      this.users=data
    })
  }

}
