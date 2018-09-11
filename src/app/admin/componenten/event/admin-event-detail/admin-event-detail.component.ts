import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { Message } from '../../../../models/message';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/**
 * message/event detail page
 */
@Component({
    selector: 'app-admin-event-detail',
    templateUrl: './admin-event-detail.component.html'
})
export class AdminEventDetailComponent implements OnInit {
    /**
     * for binding
     */
    data: any;
    /**
     * for binding
     */
    id;
    form: FormGroup;
    validUrl = '^\/(([A-z0-9\-\%]+\/)*[A-z0-9\-\%\.]+$)?'
    validTime = '[0-9]{4}-([0-9]|0[0-9]|1[0-9])-([0-9][0-9]|[0-9])T([0-9]|0[0-9]|1[0-9]):[0-9]{2}'
    /**
     * component constructor
     * @param router for navigation
     * @param route for param.id
     * @param dataService crud events
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }
    /**
     * on load
     */
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.getData();
        this.form = new FormGroup({
            message: new FormControl('', [Validators.required]),
            showFrom: new FormControl('', [Validators.required, Validators.pattern(this.validTime)]),
            showTill: new FormControl('', [Validators.required, Validators.pattern(this.validTime)]),
            imgUrl: new FormControl('', [Validators.pattern(this.validUrl)]),
            id: new FormControl('', [Validators.required, Validators.minLength(5)])
        }, { updateOn: 'change' });
    }
    /**
     * get form controls
     */
    get f() {
        return this.form.controls;
    }
    /**
     * gets a single message
     */
    getData() {
        this.dataService.getMessage(this.id).subscribe(
            res => {
                this.data = res;
            }
        );
    }
    /**
     * sees if checkbox is checked
     * @param  $event
     */
    check($event) {
        $('#imgBoolean').change(function () {
            alert($('#imgBoolean').attr('checked'));
        });
    }
    /**
     * updates a message
     * @param message message text to replace the old text with
     * @param showFrom show from time/date
     * @param showTill untill
     * @param imgLink url img can be found at
     * @param img boolean for visability of img
     * @param id id to update by
     */
    update(message, showFrom, showTill, imgLink, img, id) {
        this.dataService.updateMessage(this.id, {
            message: message, showFrom: showFrom,
            showTill: showTill, imgLink: imgLink, img: img, identifier: id
        }).subscribe( ()=>{
            this.router.navigate(['./admin/components/events']);
        });
    }
    /**
     * prevents a user from acidently removeing a message
     */
    alertUser() {
        const redirect = window.confirm('updated do you wish to return?');
        if (redirect) {
            this.router.navigate(['./admin/components/events']);
        }
    }
}
