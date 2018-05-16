import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';

/**
 * Socket service
 */
@Injectable()
export class SocketService {
  /**
   * base url to observe
   */
  private url = 'http://localhost:3000';
  /**
   * just defining it
   */
  private socket;
  /**
   * posts a message
   * @param message posts a message
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