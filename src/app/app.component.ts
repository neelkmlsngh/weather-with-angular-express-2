import { Component } from '@angular/core';
import { WeatherSearchService } from './weather-search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherSearchService]
})
export class AppComponent {
  results: Object;
  

  constructor(private weatherSearchService: WeatherSearchService) {}


  getDetails(searchTerm){
    //alert(searchTerm.value

    this.weatherSearchService.searchEntries(searchTerm.value)
      .subscribe(results => {
        this.results = results.forecast.forecastday;
        console.log(this.results)
      });
  }



    
}