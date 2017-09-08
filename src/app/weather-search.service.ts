import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherSearchService {
  
  constructor(private http: Http) { }

  searchEntries(searchTerm:any) {
  	var api='http://api.apixu.com/v1/forecast.json?key=2e3212ea081543c09a6130414170609&q='+searchTerm+'&days=10'
    return this.http
        .get(api)
        .map(res => res.json());
  }
  save(data){
    var expressApi='http://localhost:8090/api/book'
    return this.http.post(expressApi,data)
    .map((res: Response)=>res.json())
}
showFavList(){
	var expressApi='http://localhost:8090/api/book'
	return this.http.get(expressApi)
     .map((res:Response)=>{
     	return res.json()})
}

deleteData(id:any){
	var expressApi='http://localhost:8090/api/book/'+id;
	return this.http.delete(expressApi)
	.map((res:Response)=>{
		res.json()
	})
}
}




