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
     * @param ipservice ipservice
     */
    constructor(private ipservice: IpService) { }
    /**
     * for logic and binding
     */
    configs: any = [];
    /**
     * on init
     */
    ngOnInit() {
        this.getConfigs();
    }
    /**
     * delete ip function
     * @param ip ip to delete
     */
    deleteConfig(ip) {
        this.ipservice.deleteIp(ip).subscribe(() => {
            console.log('' + ip + '');
            this.getConfigs();
        });
    }
    /**
     * get saved 'configs' from db
     */
    getConfigs() {
        this.ipservice.getIps().subscribe(config => {
            this.configs = config;
            if (config = []) {
                this.configs.length = 0;
            }
        });
    }
}
