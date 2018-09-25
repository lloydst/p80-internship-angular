import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Message } from '../../../models/message';
import { Observable } from 'rxjs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';
/**
 * event component: here admin's can add and delete messages or go to the detail page to edit
 */
@Component({
    selector: 'app-event',
    templateUrl: './event.component.html'
})

export class AdminEventComponent implements OnInit {
    /**
     * form validation returns a message if the errortype equals the type
     */
    form_validation_messages = {
        'message': [
            { type: 'required', message: 'A message is required' },
        ],
        'showFrom': [
            { type: 'required', message: "A start time is required" },
            { type: 'pattern', message: "please fill out all fields (both time and date)" }
        ],
        'showTill': [
            { type: 'required', message: "A end time is required" },
            { type: 'pattern', message: "please fill out all fields (both time and date)" }
        ],
        'imgUrl': [
            { type: 'pattern', message: 'the img url has to come from example.com/images/img/image_name' },
        ],
        'identifier': [
            { type: 'required', message: 'A message Id/ Title is required please provide one!' }
        ]
    }
    /**
     * binding
     */
    messages;
    /**
     * binding
     */
    model;
    /**
     * binding
     */
    event;
    /**
     * form group
     */
    form: FormGroup
    /**
     * constructor
     * @param dataService for crud operations
     */
    constructor(private dataService: DataService) { }
    /**
     * function to create a new message/event
     * @param mssg
     * @param from
     * @param untill
     * @param imgClass
     * @param imgBoolean
     * @param identifier
     */
    newMessage(mssg, from, untill, imgClass, imgBoolean: boolean, identifier) {
        this.model = new Message(mssg, from, untill, imgClass, imgBoolean, identifier);
    }
    /**
     * regex for a valid relative url
     */
    validUrl = '^\/(([A-z0-9\-\%]+\/)*[A-z0-9\-\%\.]+$)?'
    /**
     * valid time shape
     */
    validTime = '[0-9]{4}-([0-9]|0[0-9]|1[0-9])-([0-9][0-9]|[0-9])T([0-9][0-9]):([0-9][0-9])'
    /**
     * on load
     */
    ngOnInit() {
        this.getData();
        this.form = new FormGroup({
            message: new FormControl('', [Validators.required]),
            showFrom: new FormControl('', [Validators.required, Validators.pattern(this.validTime)]),
            showTill: new FormControl('', [Validators.required, Validators.pattern(this.validTime)]),
            imgUrl: new FormControl('', [Validators.pattern(this.validUrl)]),
            identifier: new FormControl('', [Validators.required, Validators.minLength(5)])
        }, { updateOn: 'change' });
    }
    /**
     * get form controls
     */
    get f() {
        return this.form.controls;
    }
    /**
     * creates a message
     * @param mssg message/events
     * @param from time its shown from
     * @param untill time its can be shown till
     * @param iClass adds a background img if there
     * @param iBoolean boolean whether it has a class
     * @param identifier identifier to update/delete
     */
    create(mssg: String, from: String, untill: String, iClass: String, iBoolean: Boolean, identifier: String) {
        // need to add validator to from/untill fields
        const str = /([0-9])/g;
        const untillStr = untill.match(str);
        const fromStr = from.match(str);
        // console.log(untillStr, fromStr);
        let newFrom = '';
        let newTill = '';
        for (let i = 0; i <= 12; i++) {
            newFrom = newFrom + fromStr[i];
            newTill = newTill + untillStr[i];
        }
        this.dataService.createMessage({
            message: mssg,
            showFrom: from,
            showTill: untill,
            imgLink: iClass,
            img: iBoolean,
            identifier: identifier
        }).subscribe(
            data => {
                // refresh the list
                this.getData();
            },
            error => {
                console.error('Error creating message!');
                return error; // Observable.throw(error);
            }
        );
    }
    /**
     * gets all messages
     */
    getData() {
        this.dataService.getAllMessage().subscribe(
            res => {
                this.messages = res;
            });
    }
    /**
     * checks if the checkbox is checked
     * @param checked
     */
    check($event) {
        $('#imgBoolean').change(function () {
            alert($('#imgBoolean').attr('checked'));
        });
    }

    /**
     * deletes a message
     * @param message message to delete
     */
    delete(message) {
        if (confirm(`Are you sure you want to delete ${message.identifier}?`)) {
            this.dataService.deleteMessage(message.identifier).subscribe(
                data => {
                    // refresh the list
                    this.getData();
                    return true;
                },
                error => {
                    console.error(`An error occured trying to delete ${message.identifier}!`);
                    return Observable.throw(error);
                }
            );
        }
    }
}
