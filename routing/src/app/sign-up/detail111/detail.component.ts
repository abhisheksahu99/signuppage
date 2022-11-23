import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input()
  
  item1:any=[
    {name:'Abhishek',number:'7012563586',status:'Intern',email:'Abhishek@gamil.com',group:'Devloper'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
