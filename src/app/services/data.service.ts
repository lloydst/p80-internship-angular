import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
 
  constructor(private http: HttpClient) { }
  
  getWebsite(id) {
    return this.http.get('/api/'+id+'');
  }
  updatePage(id, newContent) {
    return this.http.put('/api/'+id+'', newContent);
  }
  getAll(){
    return this.http.get('/api');
  }
  create(newPage){
    
    return this.http.post('/api', newPage);
  }
}