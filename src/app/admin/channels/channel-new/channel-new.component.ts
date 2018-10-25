import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Paths } from '../../../models/channel';

/**
 * place holder for a channel-contents component
 */
@Component({
    selector: 'app-channel-new',
    templateUrl: './channel-new.component.html'
})
export class ChannelNewComponent implements OnInit {
/**
 * list for the options of the select
 */
    components = [
        { url: '/components/traffic', name: 'traffic', description: 'displays a google map with the traffic layer displaying current traffic jams in the area' },
        { url: '/components/weather', name: 'weather', description: 'displays the current weather pulled from the yahoo weather api' },
        { url: '/components/financial', name: 'financial', description: 'displays bitcoins stock prices' },
        { url: '/components/event', name: 'message', description: 'this component can display messages' },
        { url: '/components/meeting', name: 'meeting', description: 'displays the meetings held in the meeting room' },
        { url: '/components/news', name: 'news', description: 'displays the latest 2 articles from nu.nl (rss feed)' },
    ]
    /**
     * i should really place these somewhere else
     */
    form_validation_messages = {
        'channel': [
            { type: 'required', message: 'a channel name is required' },
            { type: 'minlength', message: 'The channel name has to be atleast 4 characters long' }
        ],
        'pathUrl': [
            { type: 'required', message: 'you can either select a component out of the list or use a url (including https://' },
            { type: 'minlength', message: 'The pathurl has to be atleast 16 characters long' }
        ],
        'componentName': [
            { type: 'required', message: "a name is required" },
            { type: 'minlength', message: "the component name has to be atleast 4 characters long" }
        ],
        'description': [
            { type: 'minlength', message: 'the description has to be atleast 20 characters long, it is best to describe what function the component will serve' },
            { type: 'required', message: 'the description is required' }
        ],
        'delay': [
            { type: 'min', message: "the minimum time is 5 seconds)" },
            { type: 'required', message: 'the delay is required, has to be atleast 5 seconds ' }
        ]
    }
    
    /**
     * binding
     */
    componentPath: Paths;
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
     * @param fb formbuilder
     * @param data dataservice
     * @param router angular router
     */
    constructor(
        private fb: FormBuilder,
        private data: DataService,
        private router: Router
    ) { }
    /**
     * on load
     */
    ngOnInit() {
        // we will initialize our form here

        this.form = this.fb.group({
            channel: ['', [Validators.required, Validators.minLength(4)]],
            path: this.fb.array([
                this.getPath(),
                this.getPath()
            ])
        });
    }

    /**
     * form controls helper
     */
    get f() {
        return this.form.controls;
    }

    /**
     * adds a empty 'path' with default value's only
     */
    getPath() {
        // initialize our address
        return this.fb.group({
            pathurl: new FormControl('http://example.com', [Validators.required, Validators.minLength(16)]),
            description: new FormControl('this is where a description would go', [Validators.required, Validators.minLength(20)]),
            delay: new FormControl('10', [Validators.required, Validators.min(5)]),
            componentName: new FormControl("here you can set a 'custom' component name", [Validators.required, Validators.minLength(4)]),
            show: new FormGroup({
                allways: new FormControl(true, []),
                timefrom: new FormControl('09:00', []),
                timetill: new FormControl('18:00', []),
                days: new FormGroup({
                    monday: new FormControl(true,[]),
                    tuesday: new FormControl(true, []),
                    wednesday: new FormControl(true, []),
                    thursday: new FormControl(true, []),
                    friday: new FormControl(true, []),
                    saturday: new FormControl(false, []),
                    sunday: new FormControl(false, []),
                })
            })
        });
    }

    /**
     * just a function
     */
    addPath() {
        // add address to the list
        const control = <FormArray>this.form.controls['path'];
        control.push(this.getPath());

    }
    /**
     * path to remove
     * @param i index
     */
    removePath(i: number) {
        // remove address from the list
        const control = <FormArray>this.form.controls['path'];
        control.removeAt(i);
    }
    /**
     * rerouting
     * @param uri url to navigate too
     */
    redirectTo(uri: string) {
        this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() =>
            this.router.navigate(['admin/channels/', uri]));
    }
    /**
     * just a function
     * @param model channel interface to save it in the right shape
     */
    save() {
        console.log('saved')
        this.data.createContent(this.form.value).subscribe(() => {
            this.redirectTo(this.form.value.channel);
        });
    }
    /**
     * tests the url by opening a new tab so the user can see if it will load
     * @param url url to test
     */
    testUrl(url) {
        window.open(url)
    }
    
}
