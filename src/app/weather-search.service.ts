import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WeatherSearchService {
  // baseUrl: string = 'api.openweathermap.org/data/2.5/forecast/daily';
  // queryUrl: string = '?q=London&mode=xml&units=metric&cnt=7';

  constructor(private http: Http) { }

  // search(terms: Observable<string>) {
  //   return terms.debounceTime(400)
  //     .distinctUntilChanged()
  //     .switchMap(term => this.searchEntries(term));
  // }

  searchEntries() {
    return this.http
        .get('http://api.apixu.com/v1/forecast.json?key=2e3212ea081543c09a6130414170609&q=Paris&days=10')
        .map(res => res.json());
  }
}



