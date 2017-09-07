import { Component } from '@angular/core';
import 'rxjs/add/operator/map';@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app';
results:any;

onreceive(s:any){
	this.results=s;
	console.log(this.results);
}

}