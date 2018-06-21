import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * financial component
 */
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html'
})
export class FinancialComponent implements OnInit {
/**
 * binding
 */
bitVal:any =[]
/**
 * binding
 */
percentChangeHour
/**
 * binding
 */
percentChangeDay
/**
 * binding
 */
percentChangeWeek
/**
 * http client
 * @param http http client
 */
constructor(private http: HttpClient) { }
/**
 * on init
 */
  ngOnInit() {
    this.getBitData()
    
  }
  
  /**
   * get data from end point every 10 s
   * @returns Object
   * {<br>
   * "id": "bitcoin", <br>
        "name": "Bitcoin", <br>
        "symbol": "BTC", <br>
        "rank": "1", <br>
        "price_usd": "8843.46", <br>
        "price_btc": "1.0", <br>
        "24h_volume_usd": "9539700000.0", <br>
        "market_cap_usd": "150338926122", <br>
        "available_supply": "17000012.0", <br>
        "total_supply": "17000012.0", <br>
        "max_supply": "21000000.0", <br>
        "percent_change_1h": "-0.32", <br>
        "percent_change_24h": "-3.33", <br>
        "percent_change_7d": "7.56", <br>
        "last_updated": "1524743675", <br>
        "price_eur": "7263.11601108", <br>
        "24h_volume_eur": "7834936530.6", <br>
        "market_cap_eur": "123473059346"<br>
   }
   */
  getBitData() {
    setTimeout(() => {
      this.getBitData()
    }, 10000); // time it calls
    this.http.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=24&convert=EUR').subscribe( // change the limit amount to make it more or less
      res=>{ this.bitVal = res
      }
    )
  }
}
