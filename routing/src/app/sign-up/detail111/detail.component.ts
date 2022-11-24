import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  users:any;
  constructor(userData:UserDataService)
  {
  userData.users().subscribe((data)=>{
    console.warn("data",data);
    this.users=data
  })
  }
  ngOnInit(): void {
    
  }

  

}
