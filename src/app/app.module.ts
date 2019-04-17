import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, POSITION, SPINNER } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiServiceService } from './api-service.service';
import { NewsSourcesComponent } from './news-sources/news-sources.component';
import { SourceDetailsComponent } from './source-details/source-details.component';
import { HeadlineViewComponent } from './headline-view/headline-view.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.ballSpinClockwiseFadeRotating,
  hasProgressBar: true,
  pbThickness:4,
  fgsColor:"rgb(87, 87, 87,1.0)",
  bgsOpacity: 0,
  pbColor: "rgb(87, 87, 87,1.0)",
  overlayColor: "rgba(200, 200, 200,0.6)"
}

@NgModule({
  declarations: [
    AppComponent,
    NewsSourcesComponent,
    SourceDetailsComponent,
    HeadlineViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    CarouselModule,
    AngularMaterialModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  NgxUiLoaderHttpModule.forRoot({showForeground:true})
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
