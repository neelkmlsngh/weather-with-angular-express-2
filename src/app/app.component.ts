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
  searchTerm = new Subject<string>();

  constructor(private weatherSearchService: WeatherSearchService) {}


  getDetails(){
    this.weatherSearchService.searchEntries()
      .subscribe(results => {
        this.results = results.results;
      });
  }

    
}