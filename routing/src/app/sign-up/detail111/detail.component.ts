import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  users:any;
  constructor(private userData:UserDataService,private router:ActivatedRoute)
  {
    this.router.params.subscribe((params: any) => {
      // this.userDetail(params?.id);
      console.log(params?.id)
      this.getUser(params?.id)
    });
  }
  ngOnInit(): void {
    
  }
  getUser(id:number){
    this.userData.getUser(id).subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    })
  }
  

}
