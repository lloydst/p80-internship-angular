import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { DataService } from '../../../services/data.service';

/**
 * admin entrance contents components
 */
@Component({
    selector: 'app-channel-content',
    templateUrl: './channel-content.component.html'
})
export class ChannelContentComponent implements OnInit {
    /**
     * prefil data
     */
    Components = [
        {
            url: '/component/',
            description: 'Does this and that',
            name: 'derp'
        }
    ]
    /**
     * current channel
     */
    currentChannel
    /**
     * binding for channelName
     */
    channelName
    /**
     * channel data
     */
    channelData
    /**
     * pathdata
     */
    preloadPath
    /**
     * form
     */
    form: FormGroup;
    /**
     * binding
     */
    channel = new FormControl();

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
    ) {
        this.createForm()
    }
    /**
     * creates the form
     */
    createForm() {
        this.form = this.fb.group({
            channel: this.fb.group({}),
            path: this.fb.array([])
        });
    }
    /**
     * gets the current url out of the router
     */
    getCurrentChannel() {
        var url = this.router.url.split("/")
        this.currentChannel = url[3]
    }
    /**
     * gets the channel settings from db and preloads the form for easy editing
     */
    reloadData() {
        this.data.getChannel(this.currentChannel).subscribe(res => {
            this.channelData = res;
            this.preloadPath = res[0].path // loads all 'paths'

            this.form.controls['channel'].setValue(res[0].channel, { onlySelf: true });
            for (let path of this.preloadPath) {

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
            componentName: new FormControl(path.componentName)
        });
    }
    /**
     * on init
     */
    ngOnInit() {
        this.getCurrentChannel()

        this.form = this.fb.group({
            channel: [this.channelName],
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
            componentName: [''],
            delay: [20000]
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
     * @param channel_to_Update channel to update
     */
    save(channel_to_Update) {

        this.data.saveContent(this.form.value).subscribe(() => { })
        return { message: 'Saved' }
    }
    
    get path(): FormArray {
        return this.form.get('path') as FormArray;
    };
    /**
     * resets form to what it was
     */
    revert() {
        this.form.reset({
            channel: [this.currentChannel],
            path: this.fb.array([])
        });
        this.reloadData()
    }

}
