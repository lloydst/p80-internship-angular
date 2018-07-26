import { Component, OnInit } from '@angular/core';
import { IpService } from '../../../services/ip.service';
import { HttpClient } from '@angular/common/http';

/**
 * create / add configs to db
 */
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
    /**
     * retrieved from api gives ip
     */
    ipAddress 
    /**
     * just the constructor
     * @param ipService crud service
     * @param http http client
     */
  constructor(private ipService: IpService,
    private http: HttpClient) {
    
   }
   /**
    * stores the configs stored in db
    */
otherIps: any = []
/**
 * on viewinit
 */
  ngOnInit() {
    this.ipService.getIps().subscribe(configs=>{
        this.otherIps = configs
        console.log(configs)
    })
    this.getIp()
  }
  /**
   * adds formdata to db
   * @param obj json object
   */
  addIpConfig (obj) {
        this.ipService.addIp(obj).subscribe()
  }
  /**
   * get ip off the jsonip api
   */
  getIp() {
    this.http.get<{ ip: string }>('https://jsonip.com')
    .subscribe(data => {
        this.ipAddress = data.ip
        
    })
  }
}
