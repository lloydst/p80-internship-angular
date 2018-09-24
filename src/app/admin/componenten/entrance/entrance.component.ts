import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/**
 * add or remove websites that are shown in the loop or navigate to the detail-page to edit a existing one
 */
@Component({
    selector: 'app-entrance',
    templateUrl: './entrance.component.html'
})
export class AdminEntranceComponent implements OnInit {
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
            { type: 'required', message: 'the display name is required and has to be atleast 10000 (10 seconds' }
        ]
    }
    /**
     * for binding
     */
    data: any;
    /**
     * constructor
     * @param dataService gets website list from api
     * @param router to navigate
     */
    constructor(
        private dataService: DataService,
        private router: Router,
        private formBuilder: FormBuilder) { }
    /**
     * bindings jai!
     */
    form: FormGroup;
    submitted = false;
    validUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    /**
     * runs on page load
     */
    ngOnInit() {

        this.getData();
        this.form = new FormGroup({
            name: new FormControl('', [Validators.minLength(3), Validators.required]),
            url: new FormControl('', [Validators.required, Validators.pattern(this.validUrl)]),
            displayTime: new FormControl('', [Validators.min(10000), Validators.required]),
        }, { updateOn: 'change' });
    }
    get f() { 
        return this.form.controls; 
    }
    /**
     * gets all websites from the api
     */
    getData() {
        this.dataService.getAllWebsites().subscribe(
            res => {
                this.data = res;
            });
    }
    /**
     * goes to the detail page
     * @param item string shaped identifier
     */
    detail(item) {
        this.router.navigate(['/item._id']);
    }
    /**
     * deletes the website also checks if the user is shure about deleting it
     * @param item string shaped identifier
     */
    delete(item) {
        if (confirm(`Are you sure you want to delete ${item.name} ?`)) {
            this.dataService.deleteWebsite(item._id).subscribe(
                () => {
                    // refresh the list
                    this.getData();
                    return true;
                },
                error => {
                    console.error('Error deleting message!');
                    return Observable.throw(error);
                }
            );
        }
    }
    /**
     * creates a new website document with the following contents
     * @param site{String}  name of a site/ client
     * @param url the url of the corresponding client/site
     * @param visable a boolean i should delete
     * @example
     * // succes
     * create(poort80, Https://poort80.nl, true);
     */
    create(site: string, url: string, visable, displayTime) {
        this.dataService.createWebsite({
            name: site,
            url: url,
            visable: visable,
            displayTime: displayTime
        }).subscribe(
            () => {
                // refresh the list
                this.getData();
                return true;
            },
            error => {
                // console.error('Error creating message!');
                return Observable.throw(error);
            }
        );
    }
}
