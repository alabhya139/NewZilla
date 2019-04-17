import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService{

  baseUrl = "https://newsapi.org/v2/";
  apiKey = "c53d7b2df549415cb0fae91c4ddcb15d";
  private currentHeadline = new BehaviorSubject<any>(null);
  currentHeadline$ = this.currentHeadline.asObservable();

  constructor(private http: HttpClient) { }


  getSources():Observable<any>{
    return this.http.get(`${this.baseUrl}sources?apikey=${this.apiKey}`)
  }

  getTopHeadlinesBySource(sourceId){
    return this.http.get(`${this.baseUrl}top-headlines?sources=${sourceId}&apikey=${this.apiKey}`)
  }

  syncHeadline(data:any){
    this.currentHeadline.next(data);
  }


}
