import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apikey='badde59a51d52adcc6b1edfc09474969';

  constructor(private http:HttpClient) { }
  getWeather(city: string)
  {
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}`);
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}`)
  }
}
