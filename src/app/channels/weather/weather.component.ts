import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
/**
 * weather component
 */
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

/**
   * for binding
   */
weatherjson
/**
 * weather service
 * @param weather weatherservice
 */
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather() {
    this.weatherService.getWeather().subscribe(
      res => {this.weatherjson = res})
  }
}
