import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherDetailComponent} from './weather-detail.component'
import { WeatherSearchComponent} from './weather-search'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { WeatherSearchService } from './weather-search.service'


@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    WeatherSearchComponent
   ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [WeatherSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
