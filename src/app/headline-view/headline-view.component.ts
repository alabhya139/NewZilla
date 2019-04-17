import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-headline-view',
  templateUrl: './headline-view.component.html',
  styleUrls: ['./headline-view.component.scss']
})
export class HeadlineViewComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }
  headline

  ngOnInit() {
    this.apiService.currentHeadline$.subscribe(data=>{
      this.headline = data;
    })
  }

}
