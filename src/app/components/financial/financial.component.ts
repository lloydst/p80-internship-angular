import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, style, animate, transition } from '@angular/animations';
/**
 * financial component
 */
@Component({
    selector: 'app-financial',
    templateUrl: './financial.component.html',
    animations: [
        trigger(
          'enterAnimation', [
            transition(':enter', [
              style({ opacity: 0}),
              animate('500ms', style({ opacity: 1}))
            ]),
            
          ]
        )
      ],
      
})
export class FinancialComponent implements OnInit {
    refreshTime = 20000 // 10s
    toggleTime = 20000 // switches between 1h, 1d and a week (up down)
    /**
     * used for toggling the bottom change
     * default to 24h on start
     */
    display = '1h'
    /**
     * binding
     */
    bitVal: any = [];
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
        this.toggleLowerTileList()
    }

    /**
     * get data from end point every 10 s
     * @returns Object
     */
    getBitData() {
        setTimeout(() => {
            this.getBitData()
        }, this.refreshTime); // time it calls
        this.http.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=24&convert=EUR').subscribe( // change the limit amount to make it more or less
            res => {
                this.bitVal = res
            }
        )
    }
    toggleLowerTileList() {

        setTimeout(() => {
            this.toggleLowerTileList()
        }, this.toggleTime);

        if (this.display == '24h') {
            this.display = '7d'
        } else if (this.display == '1h') {
            this.display = '24h'
        } else if (this.display == '7d') {
            this.display = '1h'
        }

    }
}
