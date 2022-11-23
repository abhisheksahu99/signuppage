import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  @Output() myOutput:EventEmitter<string>=new EventEmitter();
  Output='name';

  constructor() { }

  ngOnInit(): void {
  }
  
}
