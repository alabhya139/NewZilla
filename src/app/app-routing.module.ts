import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceDetailsComponent } from './source-details/source-details.component';
import { HeadlineViewComponent } from './headline-view/headline-view.component';

const routes: Routes = [
  {path:'sources/:id',component: SourceDetailsComponent,children:[
    {
      path:'headlines/:id', component: HeadlineViewComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
