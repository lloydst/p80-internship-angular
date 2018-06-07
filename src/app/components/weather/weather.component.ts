import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
/**
 * weather component
 */
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
    date
    time

  /**
   * would other wise complain about 0 not being defined
   */
0;
/**
   * for binding
   */
weatherjson: any =[]
/**
 * weather service
 * @param weatherService weatherservice
 */
  constructor(private weatherService: WeatherService) { }
/**
 * get weather on page load
 */
  ngOnInit() {
    this.getWeather()
  }
  /**
   * gets the weather from the api
   */
  getWeather() {
    this.weatherService.getWeather().subscribe(
        
      res => {
        var str = '/[^,]/g'
          this.weatherjson = res
          this.date = this.weatherjson[0].lastBuildDate.substring(0,15)
          this.time =this.weatherjson[0].lastBuildDate.substring(18, 25)//.match(str)
          console.log(this.time.substring(18, 25))
        })
  }
  /**
   * updates weather every minute
   */
  updateWeather() {
    setTimeout(() => {
      this.updateWeather
    }, 60000);
    this.getWeather()
  }

}
