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
    
  }
  /**
   * gets the news from the api
   */
  getNews() {
    this.newsService.getNews().subscribe(
      res => {
          this.news = res
        }
       
    )
  }
}
