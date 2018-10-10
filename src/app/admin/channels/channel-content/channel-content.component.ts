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
    /**
     * predivined components
     */
    components = [
        { url: '/components/traffic', name: 'traffic', description:'displays a google map with the traffic layer displaying current traffic jams in the area'},
        { url: '/components/weather', name: 'weather', description:'displays the current weather pulled from the yahoo weather api'},
        { url: '/components/financial', name: 'financial', description: 'displays bitcoins stock prices'},
        { url: '/components/event', name: 'message', description: 'this component can display messages'},
        { url: '/components/meeting', name: 'meeting', description: 'displays the meetings held in the meeting room'},
        { url: '/components/news', name: 'news', description: 'displays the latest 2 articles from nu.nl (rss feed)'},
    ]
    /**
     * form validation based on type it returns a message
     */
    form_validation_messages = {
        'channel': [
            { type: 'required', message:'A channel name is required'},
        ],
        'pathUrl': [
            { type: 'required', message: 'A url is required please provide a relative url or one in the form of: https://www.example.com' }
        ],
        'componentName': [
            { type: 'required', message: "A name is required" },
            { type: 'minlength', message: "The component name has to be atleast 4 characters long." }
        ],
        'description': [
            { type: 'minlength', message: 'The description has to be atleast 20 characters long, it is best to describe the function it has in the component' },
            { type: 'required', message: 'The description is required, it really is only used for future reference.' }
        ],
        'delay': [
            {type:'min', message: "The component shouldn't be visable shorter then 5 seconds"},
            { type: 'required', message: 'the delay is required, has to be atleast 5 seconds but can also be a very long number.' }
        ]
    }
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
                delay: 5,
                componentName: ''
            };
        }
        // console.log(path.pathurl)
        return new FormGroup({
            pathurl: new FormControl(path.pathurl, [Validators.required]),
            description: new FormControl(path.description, [Validators.required, Validators.minLength(20)]),
            delay: new FormControl(path.delay, [Validators.required, Validators.min(5)]),
            componentName: new FormControl(path.componentName, [Validators.required, Validators.minLength(4)]),
            show: new FormGroup({
                allways: new FormControl(path.show.allways, []),
                timefrom: new FormControl(path.show.timefrom, []),
                timetill: new FormControl(path.show.timetill, []),
                days: new FormGroup({
                    monday: new FormControl(path.show.days.monday, []),
                    tuesday: new FormControl(path.show.days.tuesday, []),
                    wednesday: new FormControl(path.show.days.wednesday, []),
                    thursday: new FormControl(path.show.days.thursday, []),
                    friday: new FormControl(path.show.days.friday, []),
                    saturday: new FormControl(path.show.days.saturday, []),
                    sunday: new FormControl(path.show.days.sunday, []),
                })
            })
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
        // initial data
        return new FormGroup({
            pathurl: new FormControl('https://example.com/', [Validators.required, Validators.minLength(10)]),
            description: new FormControl('describe what the purpose is of the slide, mostly for future reference', [Validators.required, Validators.minLength(20)]),
            componentName: new FormControl('give the slide a custom name', [Validators.required, Validators.minLength(4)]),
            delay: new FormControl(5, [Validators.min(5)]),
            show: new FormGroup({ // simple defaults
                allways: new FormControl(true, []),
                timefrom: new FormControl('00:00', []),
                timetill: new FormControl('23:59', []),
                days: new FormGroup({
                    monday: new FormControl(false, []),
                    tuesday: new FormControl(false, []),
                    wednesday: new FormControl(false, []),
                    thursday: new FormControl(false, []),
                    friday: new FormControl(false, []),
                    saturday: new FormControl(false, []),
                    sunday: new FormControl(false, []),
                })
            })
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
     */
    save() {
        // form with Id
        var formWId = Object.assign(this.form.value, {_id: this.channelData[0]._id})
        this.data.saveContent(formWId).subscribe(() => { });
        return { message: 'Saved' };
    }
/**
 * simple getter
 */
    get path(): FormArray {
        return this.form.get('path') as FormArray;
    }
    /**
     * getter for form controls
     */
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
    /**
     * function that opens a window so the user can confirm the url is correct
     * @param url test me
     */
    testUrl(url) {
        const testwindow = window.open(url)
        setTimeout(() => {
            testwindow.close()
        }, 15000);
    }
}
