import { Component, OnInit } from '@angular/core';
import { IpService } from '../../../services/ip.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
    ipAddress 
  constructor(private ipService: IpService,
    private http: HttpClient) {
    
   }
otherIps: any = []
  ngOnInit() {
    this.ipService.getIps().subscribe(configs=>{
        this.otherIps = configs
        console.log(configs)
    })
    this.getIp()
  }
  addIpConfig (obj) {
        this.ipService.addIp(obj).subscribe()
  }
  getIp() {
    this.http.get<{ ip: string }>('https://jsonip.com')
    .subscribe(data => {

        this.ipAddress = data.ip
        
    })
  }
}
