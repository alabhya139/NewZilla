import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-source-details',
  templateUrl: './source-details.component.html',
  styleUrls: ['./source-details.component.scss']
})
export class SourceDetailsComponent implements OnInit {

  sourceId: any;
  topHeadlines: any;
  headlineSource
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.sourceId = data;
      this.sourceId = this.sourceId.params.id;
      this.fetchHeadlinesBySource(this.sourceId);
      localStorage.setItem('id',this.sourceId);
    });
  }

  fetchHeadlinesBySource(sourceId){
    this.apiService.getTopHeadlinesBySource(sourceId)
    .subscribe(data=>{
      this.topHeadlines = data;
      this.topHeadlines = this.topHeadlines.articles;
      console.log(this.topHeadlines)
      this.headlineSource = this.topHeadlines[0];

      if(this.topHeadlines!==null && this.topHeadlines !== undefined && this.topHeadlines!==""){
        this.syncHeadline(0);

        this.router.navigateByUrl(`/sources/${this.topHeadlines[0].source.id}/headlines/0`);
      }
    })
  }

  syncHeadline(index){
    this.apiService.syncHeadline(this.topHeadlines[index]);
  }

}
