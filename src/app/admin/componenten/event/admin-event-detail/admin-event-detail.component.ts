import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';

import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileService } from '../../../../services/file.service';

/**
 * message/event detail page
 */
@Component({
    selector: 'app-admin-event-detail',
    templateUrl: './admin-event-detail.component.html'
})
export class AdminEventDetailComponent implements OnInit {
    /**
     * form validation returns the message if the error matches the type
     */
    form_validation_messages = {
        'identifier': [
            { type: 'required', message: 'A message Id/ Title is required please provide one!' }
        ],
        'message': [
            { type: 'required', message: 'A message is required' },
        ],
        'showFrom': [
            { type: 'required', message: "A start time is required" },
            { type: 'pattern', message: "please fill out all fields (both time and date" }
        ],
        'showTill': [
            { type: 'required', message: "A end time is required" },
            { type: 'pattern', message: "please fill out all fields (both time and date" }
        ],
        'imgLink': [
            { type: 'pattern', message: 'the img url has to come from example.com/images/img/image_name' },
        ]
    }
    /**
     * for binding
     */
    data: any;
    /**
     * for binding
     */
    id;
    /**
     * for binding and calling it in logic
     */
    form: FormGroup;
    /**
     * valid relative url string
     */
    validUrl = '^\/(([A-z0-9\-\%]+\/)*[A-z0-9\-\%\.]+$)?'
    /**
     * time has to be shaped correctly
     */
    validTime = '[0-9]{4}-([0-9]|0[0-9]|1[0-9])-([0-9][0-9]|[0-9])T([0-9]|0[0-9]|1[0-9]):[0-9]{2}'
    /**
     * binding
     */
    image;
    /**
     * component constructor
     * @param router for navigation
     * @param route for param.id
     * @param dataService crud events
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService,
        private fileService: FileService
    ) { }
    /**
     * on load
     */
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
       
        this.getData();
        this.form = new FormGroup({
            identifier: new FormControl('', [Validators.required, Validators.minLength(5)]),
            message: new FormControl('', [Validators.required]),
            showFrom: new FormControl('', [Validators.required, Validators.pattern(this.validTime)]),
            showTill: new FormControl('', [Validators.required, Validators.pattern(this.validTime)]),
            imgLink: new FormControl('', [Validators.pattern(this.validUrl)])

        }, { updateOn: 'change' });
        this.getAllImages();
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
        const parsedUrl = encodeURIComponent(this.id.replace(/%20/g, " "))//this.id.replace(/%20/g, " ")
        console.log(parsedUrl)
        this.dataService.getMessage(parsedUrl).subscribe(
            res => {
                this.data = res;
                this.form.patchValue(res[0])
            }
        );
    }
    /**
     * sees if checkbox is checked
     * @param  $event click event
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
     * @param identifier id to update by
     */
    update(message, showFrom, showTill, imgLink, img, identifier) {
        this.dataService.updateMessage(this.id, {
            message: message, showFrom: showFrom,
            showTill: showTill, imgLink: imgLink, img: img, identifier: identifier
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
    getAllImages() {
        this.fileService.getImages().subscribe(images => {
            this.image = images;
        });
    }
    /**
     * deletes a img
     * @param delete_me filename of image too delete
     */
    deleteImg(delete_me) {
        // let done = false
        this.fileService.deleteImg(delete_me).subscribe(image => {
            this.image = image;
            console.log('marco');
        }, () => {
            this.getAllImages();
            console.log('polo');
        });
    }
    patchImgLink(filename) {
        this.form.patchValue({
            imgLink:'/images/img/'+filename})
    }
}
