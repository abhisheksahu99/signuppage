import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userData: any;
  users: any[]=[]

  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void{
    this.userDataService.getAllUsers().subscribe((data: any)=>{
      console.warn("data",data);
      this.users=data
    })
  }

}
