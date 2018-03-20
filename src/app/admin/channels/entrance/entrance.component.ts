import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../services/data.service';
import { Website } from '../../../models/website';
@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class AdminEntranceComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }
  getData() {
    this.dataService.getAll().subscribe(
      res => {this.data = res})
  }
}
