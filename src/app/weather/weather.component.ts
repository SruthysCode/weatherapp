import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
city: any;
weatherData:any;

constructor(private weatherService :WeatherService){}
ngOnInit(){}
getWeather(){
  this.weatherService.getWeather(this.city).subscribe(data=>{
    this.weatherData=data;
    console.log(data);
  })
}
}
