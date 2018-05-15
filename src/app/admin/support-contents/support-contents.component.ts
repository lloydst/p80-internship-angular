import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Channel } from '../../models/channel.interface';

/**
 * admin support component
 */
@Component({
  selector: 'app-support-contents',
  templateUrl: './support-contents.component.html',
  styleUrls: ['./support-contents.component.scss']
})
export class SupportContentsComponent implements OnInit {
  form: FormGroup;
  contents;
  channel;
  /**
   * constructor
   */
 
 
  constructor(
    private fb: FormBuilder,
    private data: DataService) { }
/**
 * on load
 */
  ngOnInit() {
    this.data.getChannel('support').subscribe(res=> {
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
