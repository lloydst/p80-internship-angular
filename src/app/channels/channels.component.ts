import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
/**
 * temp testing socket io
 */
import * as moment from 'moment';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/throttleTime';
import { SocketService } from '../services/socket.service';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  message: String;
  messages: String[] = [];
  constructor(
    public router: Router,
    public socketService: SocketService
  ) { }

  sendMessage() {
    this.socketService.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit() {
    this.socketService
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    });
  }
}
  

