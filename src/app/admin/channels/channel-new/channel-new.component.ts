
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

    components = [
        { url: 'components/traffic', name: 'traffic', description: 'displays a google map with the traffic layer displaying current traffic jams in the area' },
        { url: 'components/weather', name: 'weather', description: 'displays the current weather pulled from the yahoo weather api' },
        { url: 'components/financial', name: 'financial', description: 'displays bitcoins stock prices' },
        { url: 'components/event', name: 'message', description: 'this component can display messages' },
        { url: 'components/meeting', name: 'meeting', description: 'displays the meetings held in the meeting room' },
        { url: 'components/news', name: 'news', description: 'displays the latest 2 articles from nu.nl (rss feed)' },
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
            { type: 'required', message: 'A relative url is required please provide one' },
            { type: 'minlength', message: 'The client name has to be atleast 16 characters long' }
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
            { type: 'min', message: "the component shouldn't be visable shorter then 5000 ticks (5 seconds)" },
            { type: 'required', message: 'the delay is required, has to be atleast 5seconds (or 5000 ticks) but can also be a very long number' }
        ]
    }
    /**
     * preload data
     */
    Components = [
        {
            url: '/component/CHANGE_THIS_PART',
            description: 'Does this and that',
            name: 'name'
        },
        {
            url: '/component/other',
            description: 'has a description of what the path does',
            name: 'name'
        }
    ];
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
            ])
        });
        this.log()
    }

    /**
     * form controls helper
     */
    get f() {
        return this.form.controls;
    }
    /**
     * path controls helper
     */
    log() {
        console.log(this.f)
    }
    /**
     * adds a empty 'path'
     */

    getPath() {
        // initialize our address
        return this.fb.group({
            pathurl: new FormControl('http://example.com', [Validators.required, Validators.minLength(16)]),
            description: new FormControl('this is where a description would go', [Validators.required, Validators.minLength(20)]),
            delay: new FormControl('5', [Validators.required, Validators.min(5)]),
            componentName: new FormControl("here you can set a 'custom' component name", [Validators.required, Validators.minLength(4)]),
            show: new FormGroup({
                allways: new FormControl(true, []),
                timefrom: new FormControl('09:00', []),
                timetill: new FormControl('18:00', []),
                days: new FormGroup({
                    monday: new FormControl(false,[]),
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
     * just a function
     */
    addPath() {
        // add address to the list
        const control = <FormArray>this.form.controls['path'];
        control.push(this.getPath());
        this.log()
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
    save(new_channel) {
        this.data.createContent(this.form.value).subscribe(() => {
            this.redirectTo(this.form.value.channel);
        });
    }
    testUrl(url) {
        window.open(url)
    }
    
}
