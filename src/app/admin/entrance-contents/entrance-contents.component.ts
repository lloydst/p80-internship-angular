import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray, FormControl } from '@angular/forms';
import {Channel} from '../../models/channel.interface'
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
/**
 * admin entrance contents components
 */
@Component({
  selector: 'app-entrance-contents',
  templateUrl: './entrance-contents.component.html',
  styleUrls: ['./entrance-contents.component.scss']
})
export class EntranceContentsComponent implements OnInit {
  form: FormGroup;
  contents;
  channel;
  /**
   * constructor
   */
 
 
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private router: Router
  ) {

 
  }
  
  ngOnInit() {
    this.data.getChannel('entrance').subscribe(res=> {
        this.channel = res
    })
    this.getcontents()
    // we will initialize our form here
    this.form = this.fb.group({
            channel: ['', [Validators.required, Validators.minLength(5)]],
            path: this.fb.array([
                this.initPath(),
            ])
        });
        
    }
    
getcontents() {
  this.data.getChannelContent().subscribe(
    res => {this.contents = res})

}
initPath() {
        // initialize our address
        return this.fb.group({
            pathurl: [''],
            description: [''],
            componentName:['']
        });
    }

addPath() {
    // add address to the list
    const control = <FormArray>this.form.controls['path'];
    control.push(this.initPath());
}

removePath(i: number) {
    // remove address from the list
    const control = <FormArray>this.form.controls['path'];
    control.removeAt(i);
}
  save(model: Channel) {
    this.data.saveContent(this.form.value).subscribe(()=>{
        this.getcontents() // update ui
        
    })
    
  }
}
