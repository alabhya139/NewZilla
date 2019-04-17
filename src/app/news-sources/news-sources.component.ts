import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.component.html',
  styleUrls: ['./news-sources.component.scss']
})
export class NewsSourcesComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed: 2000,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  sources = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {

    this.fetchSources();
    
  }

  fetchSources(){
    this.apiService.getSources()
    .subscribe(data=>{
      this.sources = data.sources;
      console.log(this.sources)
    })
  }

}
