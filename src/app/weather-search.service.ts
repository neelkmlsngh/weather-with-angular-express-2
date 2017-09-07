import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WeatherSearchService {
  

  constructor(private http: Http) { }


  searchEntries(searchTerm:any) {
  	var api='http://api.apixu.com/v1/forecast.json?key=2e3212ea081543c09a6130414170609&q='+searchTerm+'&days=10'
    return this.http
        .get(api)
        .map(res => res.json());
  }
}



