import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: any) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=67bfbab3c559549b61bb57ba6a5b4176`);
  }
}
