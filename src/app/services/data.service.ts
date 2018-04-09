import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
 
  constructor(private http: HttpClient) { }
  // crud websites
  getWebsite(id) {
    return this.http.get('/api/websites/'+id+'');
  }
  updateWebsite(id, newContent) {
    return this.http.put('/api/websites/'+id+'', newContent);
  }
  getAllWebsites(){
    return this.http.get('/api/websites');
  }
  createWebsite(newPage){
    return this.http.post('/api/websites', newPage);
  }
  deleteWebsite(id) {
    return this.http.delete('/api/websites/' + id)
  }

  // crud message
  getMessage(id) {
    return this.http.get('/api/messages/'+id+'');
  }
  updateMessage(id, newContent) {
    return this.http.put('/api/messages/'+id+'', newContent);
  }
  getAllMessage(){
    return this.http.get('/api/messages');
  }
  createMessage(newPage){
    return this.http.post('/api/messages', newPage);
  }
  deleteMessage(id) {
    return this.http.delete('/api/messages/' + id)
  }
}