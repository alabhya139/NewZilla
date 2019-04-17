import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){}
  initial = 0;

  ngOnInit(){
    if(localStorage.getItem('id')==="null" || localStorage.getItem('id')===undefined || localStorage.getItem('id')===""){
      this.router.navigateByUrl('/sources/the-hindu');
    }else this.router.navigateByUrl('/sources/'+localStorage.getItem('id'));
  }
}
