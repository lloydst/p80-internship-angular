import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import * as $ from 'jquery';
/**
 * news Component
 */
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
    x=0
  /**
   * binding
   */
  news
  /**
   * constructor
   * @param newsService gets the news feed from the api
   */
  constructor(private newsService: NewsService) { }
/**
 * on load
 */
  ngOnInit() {
    this.getNews()
     // comment out this function to stop it from looping and only show the latest article
  }
  /**
   * gets the news from the api
   */
  getNews() {
    this.newsService.getNews().subscribe(
      res => {
          this.news = res
          setTimeout(() => {
            this.slide()
            console.log('slide called')
          }, 600);
          
        }
       
    )
  }
  slide() {
      console.log(this.x)
      if(this.x == 0) {
        var setVisable = $( '.'+this.x.toLocaleString())
        setVisable.attr('style','display:inline-flex')
        console.log(setVisable) 
        this.incrementByOne()
        
      } else {
        var setVisable = $( '.'+this.x.toLocaleString())
        setVisable.attr('style','display: inline-flex')
        console.log(setVisable) 
        setTimeout(() => {
          this.incrementByOne()
        }, 40000);
      }
      
      //this.incrementByOne()
      // if i = this.news[i] make it visable
  }
  incrementByOne() {
    var setVisable = $( '.'+this.x.toLocaleString())
    setVisable.attr('style', 'display: none')
      if (this.x<11) {
        this.x++
        this.slide()
      } else {
          console.log('i am to old for this shit')
          this.getNews()
      }
     

  }
}
