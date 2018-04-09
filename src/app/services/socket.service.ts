import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  /**
   * base url
   */
  private url = 'http://localhost:3000';
  /**
   * defining socket
   */
  private socket;
  /**
   * uses socket.io to listen to a post request
   * @param message
   * 
   */
  sendMessage(message: Object){
    this.socket.emit('add-message', message);    
  }
  /**
   * gets all messages not sure if still in use
   */
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}