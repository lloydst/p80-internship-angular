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
            name: new FormControl('', [Validators.minLength(5), Validators.required]),
            url: new FormControl('', [Validators.required, Validators.pattern(this.validUrl)]),
            displayTime: new FormControl('', [Validators.min(1000), Validators.required]),
        }, { updateOn: 'change' });
    }
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
            }
        );
    }
    /**
     * updates a website with its new content
     * @param name the (new) name of the "website" that gets updated
     * @param url the (new) url of the "website" that gets updated
     */
    update(name: String, url: String, displayTime: Number) {
        this.dataService.updateWebsite(this.id, { name: name, url: url, displayTime: displayTime }).subscribe(()=> {
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
