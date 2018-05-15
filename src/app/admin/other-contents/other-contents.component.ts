import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Channel } from '../../models/channel.interface';

/**
 * place holder for a channel-contents component
 */
@Component({
  selector: 'app-other-contents',
  templateUrl: './other-contents.component.html',
  styleUrls: ['./other-contents.component.scss']
})
export class OtherContentsComponent implements OnInit {
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
    this.data.getChannel('other').subscribe(res=> {
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