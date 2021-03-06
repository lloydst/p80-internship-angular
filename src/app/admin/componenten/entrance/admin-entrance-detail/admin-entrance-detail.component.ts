import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { Website } from '../../../../models/website';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/**
 * edit a "website", url, client name
 */
@Component({
    selector: 'app-admin-entrance-detail',
    templateUrl: './admin-entrance-detail.component.html'
})
/**
 * admin version of entrance
 */
export class AdminEntranceDetailComponent implements OnInit {
    /**
     * returns a message for a the correct error type
     */
    form_validation_messages = {
        'name': [
            { type: 'required', message: 'A client name is required please provide one' },
            { type: 'minlength', message: 'The client name has to be atleast 3 characters long' }
        ],
        'url': [
            { type: 'required', message: "A url is required" },
            { type: 'pattern', message: "can match: https://www.example.com/route but can also be used without 'https://www.'" }
        ],
        'displayTime': [
            { type: 'min', message: 'The display has to be atleast 10 seconds (10000)' },
            { type: 'required', message: 'the display name is required and has to be atleast 10000' }
        ]
    }
    /**
     * for binding
     */
    data: any = [];
    /**
     * for binding
     */
    id;
    /**
     * constructor
     * @param router used in alertUser()
     * @param route to get the id param
     * @param dataService does stuff with db
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }
    /**
     * form
     */
    form: FormGroup;
    /**
     * boolean on submitted
     */
    submitted = false;
    /**
     * regex to check if the url giving matches http(s)://www.example.com
     */
    validUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    /**
     * runs on page load
     * sets this.id too the id in the url
     * gets the data bound to that id
     * add validators to the form
     */
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.getData();
        this.form = new FormGroup({
            name: new FormControl('', [Validators.minLength(3), Validators.required]),
            url: new FormControl('', [Validators.required, Validators.pattern(this.validUrl)]),
            displayTime: new FormControl('', [Validators.min(10000), Validators.required]),
        }, { updateOn: 'change' });
    }
    /**
     * quick form controls binding for both template and logic
     */
    get f() {
        return this.form.controls;
    }

    /**
     * gets all the websites from the api and returns them
     * @method getData()
     * @returns a array
     */
    getData() {
        this.dataService.getWebsite(this.id).subscribe(
            res => {
                this.data = res;
                this.form.patchValue(res[0])
            }
        );
    }
    /**
     * updates a website with its new content
     * @param name the (new) name of the "website" that gets updated
     * @param url the (new) url of the "website" that gets updated
     */
    update(name: String, url: String, displayTime: Number) {
        this.dataService.updateWebsite(this.id, { name: name, url: url, displayTime: displayTime }).subscribe(() => {
            this.router.navigate(['./admin/components/entrance']);
        });
    }
    /**
     * stops the user from accedently removing a "website"
     */
    alertUser() {
        const redirect = window.confirm('updated do you wish to return?');
        if (redirect) {
            this.router.navigate(['./admin/components/entrance']);
        }
    }
}
