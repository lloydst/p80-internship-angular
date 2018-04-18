import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * weatherservice
 */
@Injectable()
export class WeatherService {
/**
 * ng http service
 * @param http for requests
 */

  constructor(private http: HttpClient) { }
  /**
   * gets weather from api
   */
  getWeather () {
    return this.http.get('api/weather')
  }
}