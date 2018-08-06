
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
    ]
    /**
     * binding
     */
    componentPath: Paths
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
            pathurl: ['/components/'],
            description: [''],
            componentName: [''],
            delay: [2000]
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
        this.data.saveContent(this.form.value).subscribe(() => {
            this.redirectTo(this.form.value.channel)
        })

    }

}