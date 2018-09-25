import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

/**
 * admin entrance contents components
 */
@Component({
    selector: 'app-channel-content',
    templateUrl: './channel-content.component.html'
})
export class ChannelContentComponent implements OnInit {
    form_validation_messages = {
        'channel': [
            { type: 'required', message:'a channel name is required'},
            { type: 'minlength', message: 'The client name has to be atleast 3 characters long' }
        ],
        'pathUrl': [
            { type: 'required', message: 'A client name is required please provide one' },
            { type: 'minlength', message: 'The client name has to be atleast 3 characters long' }
        ],
        'componentName': [
            { type: 'required', message: "a name is required" },
            { type: 'minlength', message: "the component name has to be atleast 4 characters long" }
        ],
        'description': [
            { type: 'minlength', message: 'the description has to be atleast 20 characters long, it is best to describe the function it has in the component' },
            { type: 'required', message: 'the description is required' }
        ],
        'delay': [
            {type:'min', message: "the component shouldn't be visable shorter then 5000 ticks (5 seconds)"},
            { type: 'required', message: 'the delay is required, has to be atleast 5seconds (or 5000 ticks) but can also be a very long number' }
        ]
    }
    /**
     * prefil data
     */
    Components = [
        {
            url: '/component/',
            description: 'Does this and that',
            name: 'derp'
        }
    ];
    /**
     * current channel
     */
    currentChannel;
    /**
     * binding for channelName
     */
    channelName;
    /**
     * channel data
     */
    channelData;
    /**
     * pathdata
     */
    preloadPath;
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
        this.createForm();
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
        const url = this.router.url.split('/');
        this.currentChannel = url[3];
    }
    /**
     * gets the channel settings from db and preloads the form for easy editing
     */
    reloadData() {
        this.data.getChannel(this.currentChannel).subscribe(res => {
            this.channelData = res;
            this.preloadPath = res[0].path; // loads all 'paths'
            this.form.controls['channel'].setValue(res[0].channel, { onlySelf: true });
            for (const path of this.preloadPath) {
                this.preaddPath(path);
            }
        });
    }
    /**
     * adds a 'path'
     * @param path used for preloading data as well as adding/removing paths
     */
    initSection(path) {
        if (!path) {
            const newpath = {
                pathurl: '',
                description: '',
                delay: 20000,
                componentName: ''
            };
        }
        // console.log(path.pathurl)
        return new FormGroup({
            pathurl: new FormControl(path.pathurl, [Validators.required, Validators.minLength(16)]),
            description: new FormControl(path.description, [Validators.required, Validators.minLength(20)]),
            delay: new FormControl(path.delay, [Validators.required, Validators.min(5000)]),
            componentName: new FormControl(path.componentName, [Validators.required, Validators.minLength(4)])
        });

    }
    /**
     * on init
     */
    ngOnInit() {
        this.getCurrentChannel();
        this.form = this.fb.group({
            channel: [this.channelName,Validators.required],
            path: this.fb.array([
            ])
        });
        this.reloadData();
    }
    getPath() {
        // initialize our address
        return this.fb.group({
            pathurl: ['/components/', [Validators.required, Validators.minLength(16)]],
            description: ['', [Validators.required, Validators.minLength(20)]],
            componentName: ['', [Validators.required, Validators.minLength(4)]],
            delay: [5000, [Validators.min(5000)]]
        });
    }
    /**
     * reloads the page
     */
    reloadPage() {
        location.reload(true);
    }
    /**
     * will preload the form with data from service
     * @param path a single 'path' returned by the service
     */
    preaddPath(path) {
        const control = <FormArray>this.form.get('path');
        control.push(this.initSection(path));
    }
    /**
     * adds a blanc path
     */
    initPath() {
        // initialize our address
        return this.fb.group({
            pathurl: ['',Validators.required],
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
        const control = <FormArray>this.form.controls.path;
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
    save() {
        console.log(this.channelData[0]._id)
        var formWId = Object.assign(this.form.value, {_id: this.channelData[0]._id})
        this.data.saveContent(formWId).subscribe(() => { });
        return { message: 'Saved' };
    }

    get path(): FormArray {
        return this.form.get('path') as FormArray;
    }
    get f() {
        return this.form.controls;
    }
    
    /**
     * resets form to what it was
     */
    revert() {
        this.form.reset({
            channel: [this.currentChannel],
            path: this.fb.array([])
        });
        this.reloadData();
    }
}
