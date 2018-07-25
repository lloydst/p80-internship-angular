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
iptest: string
    /**
     * on init
     */
    ngOnInit() {
        
        this.getConfigs()
        
    }
    
    deleteConfig(ip) {
        this.ipservice.deleteIp(ip).subscribe(()=>{
            console.log(''+ip+'')
            this.getConfigs()
        })
    }
    getConfigs() {
        this.ipservice.getIps().subscribe(config => {
            this.configs = config
        })
    }
}