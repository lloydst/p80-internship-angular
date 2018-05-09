import { Component, OnInit} from '@angular/core';
import { FinancialComponent } from '../../components/financial/financial.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
  entryComponents: [
    FinancialComponent
  ]
})

export class EntranceComponent implements OnInit  {
  
testArray = [
  {url:'financial',show:false, height:"1000", width: "1000"},
  {url:'weather',show:false, height:"1000", width: "1000"},
  {url:'loop',show:true, heigth:"1000", width: "1000"}
]
constructor(public sanitizer: DomSanitizer){}
  

  ngOnInit() {
    
  }
 
    
    
    
  
}
