
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Channel } from '../../models/channel.interface';

/**
 * place holder for a channel-contents component
 */
@Component({
  selector: 'app-channel-new',
  templateUrl: './channel-new.component.html',
  styleUrls: ['./channel-new.component.scss']
})
export class ChannelNewComponent implements OnInit {
  /**
   * form data
   */
  form: FormGroup;
  /**
   * used in binding
   */
  contents;
  /**
   * channel
   */
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
    
    // we will initialize our form here
    this.form = this.fb.group({
            channel: ['', [Validators.required, Validators.minLength(5)]],
            path: this.fb.array([
                this.initPath(),
            ])
        });
    }
    /**
     * adds a empty 'path'
     */
initPath() {
        // initialize our address
        return this.fb.group({
            pathurl: [''],
            description: [''],
            componentName:[''],
            delay:[2000]
        });
    }
/**
 * just a function
 */
addPath() {
    // add address to the list
    const control = <FormArray>this.form.controls['path'];
    control.push(this.initPath());
}
/**
 * just a function
 */
removePath(i: number) {
    // remove address from the list
    const control = <FormArray>this.form.controls['path'];
    control.removeAt(i);
}
/**
 * just a function
 * @param model channel interface to save it in the right shape
 */
  save(model: Channel) {
    this.data.saveContent(this.form.value).subscribe(()=>{

    })
    
  }
}