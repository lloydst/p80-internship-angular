import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews()
  }
  getNews() {
    this.newsService.getNews().subscribe(
      res => {this.news = res})
  }
}
