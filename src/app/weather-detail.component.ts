import { Component, OnInit,Input } from '@angular/core';
import { AppComponent } from './app.component'
import 'rxjs/add/operator/map';@Component({
 selector: 'app-channel',
 templateUrl: './weather-detail.component.html',
 styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent { 

  constructor() { } 
  @Input('results') results:any; 

   
}