import { Component, OnInit } from '@angular/core';
import { IpService } from '../../services/ip.service';

/**
 * admin settings component: *not yet implemented
 */
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html'
})
export class SettingComponent implements OnInit {
/**
 * constructor
 */
constructor(private ipservice: IpService) { }
configs
/**
 * on init
 */
  ngOnInit() {
      this.getConfigs()
  }
  getConfigs(){
    this.ipservice.getIps().subscribe(config=> {
        this.configs =config
    })
  }
  deleteConfig(ip){
      this.ipservice.deleteIp(ip).subscribe()
  }
}
