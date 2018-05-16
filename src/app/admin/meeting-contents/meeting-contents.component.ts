import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Channel } from '../../models/channel.interface';
import { Router } from '@angular/router';

/**
 * admin meeting contents component
 */
@Component({
  selector: 'app-meeting-contents',
  templateUrl: './meeting-contents.component.html',
  styleUrls: ['./meeting-contents.component.scss']
})
export class MeetingContentsComponent implements OnInit {
  /**
     * channeldata
     */
    channel
    /**
     * pathdata
     */
    preloadPath
    /**
     * form
     */
    form: FormGroup;
    
  
  /**
   * constructor
   * @param fb formBuilder
   * @param data dataService
   * @param router router
   */
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  /**
   * gets the channel settings from db and preloads the form for easy editing
   */
  reloadData() {
    this.data.getChannel('meeting').subscribe(res=> {
        this.channel = res;
        this.preloadPath = res[0].path // loads all 'paths'
        for(let path of this.preloadPath){
            //console.log(path)
            this.preaddPath(path)
          }
    })
  }
  /**
   * adds a 'path'
   * @param path used for preloading data as well as adding/removing paths
   */
  initSection(path) {
    if (!path) {
      var newpath = {
        pathurl: "",
        description: "",
        delay: 20000,
        componentName: ""
      }
    }
    // console.log(path.pathurl)
    return new FormGroup({
        pathurl: new FormControl(path.pathurl),
        description: new FormControl(path.description),
        delay: new FormControl(path.delay),
        componentName:new FormControl(path.componentName)
    });
  }
  /**
   * on init
   */
  ngOnInit() {
    this.data.getChannel('meeting').subscribe(res=> {
        this.channel = res;
    })
    this.form = this.fb.group({
        channel: ['meeting'],
        path: this.fb.array([])
    });
    this.reloadData()
    }
    /**
     * will preload the form with data from service
     * @param path a single 'path' returned by the service
     */
    preaddPath(path) {
        const control = <FormArray>this.form.get('path');;
        control.push(this.initSection(path));
      }
/**
 * adds a blanc path
 */
    initPath() {
        // initialize our address
        return this.fb.group({
            pathurl: [''],
            description: [''],
            componentName:[''],
            delay:[20000]
        });
    }
    /**
     * selects the path control
     */
addPath() {
    // add address to the list
    const control = <FormArray>this.form.controls['path'];
    control.push(this.initPath());
}
/**
 * removes a path
 * @param i index
 */
removePath(i: number) {
    // remove address from the list
    const control = <FormArray>this.form.controls['path'];
    control.removeAt(i);
}
/**
 * saves the contents of the form
 * @param model uses the model to add it in the right shape
 */
  save(model: Channel) {
    this.data.saveContent(this.form.value).subscribe(()=>{})
    return {message: 'Saved'}
  }
}