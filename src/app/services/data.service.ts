import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
 
  constructor(private http: HttpClient) { }
  
  getWebsite(id) {
    return this.http.get('/api/websites/'+id+'');
  }
  updatePage(id, newContent) {
    return this.http.put('/api/websites'+id+'', newContent);
  }
  getAll(){
    return this.http.get('/api/websites');
  }
  create(newPage){
    
    return this.http.post('/api/websites', newPage);
  }
  // crud message 
}