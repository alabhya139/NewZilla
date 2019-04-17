import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private apiService: ApiServiceService){}
  initial = 0;

  ngOnInit(){
    if(localStorage.getItem('id')===null || localStorage.getItem('id')===undefined || localStorage.getItem('id')===""){
      this.router.navigateByUrl('/sources/the-hindu');
    }else this.router.navigateByUrl('/sources/'+localStorage.getItem('id'));
  }

  filterIt(key:string,value:string){
    let newObj = {
      key,
      value
    }
    this.apiService.filterContent(newObj);
  }
}
