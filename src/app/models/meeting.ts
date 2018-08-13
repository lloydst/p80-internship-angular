export class Meeting {
    /**
     * 
     * @param active object
     * @param events 
     * @param title 
     * @param user 
     */
    constructor(
        public active: Active,
        public events: [Event],
        public title: string,
        public user: string
    ) {
    }
}

export class Active {
    /**
     * active object
     * @param calendar boolean
     */
    constructor(
        public calendar: true
    ) { }
}
/**
 * 
 */
export class Event {

    constructor(
        public attendees: [Attendee],
        public body: {
            content: string,
            contenttype: string
        },
        public bodyPreview: string,
        public categories: any,
        public changeKey: string,
        public createdDateTime: string,
        public end: {
            dateTime: string
            timeZone: string
        },
        public hasAttachments: boolean,
        public iCalUId: string,
        public id: string,
        public importance: string,
        public isAllDay: boolean,
        public isCancelled: boolean,
        public isOrganizer: boolean,
        public isReminderOn: boolean,
        public lastModifiedDateTime: string,
        public location: Location,
        public locations: [Location],
        public onlineMeetingUrl: string | null,
        public organizer: {
            Attendee,
            originalEndTimeZone: string,
            originalStartTimeZone: string,
            reccurence: null,
            reminderMinutesBeforeStart: number,
            responseRequested: boolean,
            responseStatus: {
                response: string,
                time: string,
            },
            sensitivity: string,
            seriesMasterId: string
            showAs: string
            start: {
                dateTime: string
                timeZone: string
            }
            subject: string
            type: string
            weblink: string
        }
    ) { }

}
export class Attendee {
    constructor(
        public emailAddress: {
            name: string,
            address: string
        },
        public status: {
            response: string,
            time: string
        },
        public type: string
    ) { }
}
export class Location {
    displayName: string
    locationType: string
    uniqueId: string
    uniqueIdType: string
}

