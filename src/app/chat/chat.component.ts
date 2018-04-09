import { Component, OnInit, OnDestroy } from '@angular/core';

import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;

  constructor(
    private chatService:SocketService
  ) {}
/**
 * sends a message and clears the form on post
 */
  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
/**
 * 
 * opens the socket connection on load
 */
  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
  
  /**
   * closes the socket connection
   */
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}