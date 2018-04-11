import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * newsservice
 */
@Injectable()
export class NewsService {
/**
 * ng http service
 * @param http for requests
 */
  constructor(private http: HttpClient) { }
  getNews () {
    return this.http.get('/api/news')
    }
}