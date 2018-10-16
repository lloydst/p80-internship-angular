import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


/**
 * dataservice
 */
@Injectable()
export class DataService {
    /**
     * for http calls
     * @param http http
     */
    constructor(private http: HttpClient,
        private cookieService:CookieService) { }
    /**
     * returns a single object or "website"
     */
    getWebsite(id: String) {
        return this.http.get('/api/websites/' + id + '');
    }
    /**
     * updates a single "website" document
     * @param id identifier for what document to update
     * @param newContent content that should replace the old content
     *
     */
    updateWebsite(id: String, newContent: Object) {
        return this.http.put('/api/websites/' + id + '', newContent);
    }
    /**
     * returns all "websites" from the db
     */
    getAllWebsites() {
        return this.http.get('/api/websites');
    }
    /**
     * creates a new "website document"
     * @param newPage contents of the new document
     */
    createWebsite(newPage) {
        return this.http.post('/api/websites', newPage);
    }
    /**
     * deletes a website
     * @param id selector for what "website" to delete from the collection
     *
     */
    deleteWebsite(id: String) {
        return this.http.delete('/api/websites/' + id);
    }

    /**
     * returns a single message
     * @param id selector for the "message to return"
     *
     */
    getMessage(id: String) {
        return this.http.get('/api/messages/' + id + '');
    }
    /**
     * updates a single message
     * @param id message to update
     * @param newContent content to update it with
     *
     */
    updateMessage(id: String, newContent: Object) {
        return this.http.put('/api/messages/' + id + '', newContent);
    }
    /**
     * returns all messages
     */
    getAllMessage() {
        return this.http.get('/api/messages');
    }
    /**
     * creates a new message document
     * @param newPage content that the new message will contain
     */
    createMessage(newPage) {
        return this.http.post('/api/messages', newPage);
    }
    /**
     * deletes a single message
     * @param id selector for the message you want to delete
     */
    deleteMessage(id) {
        return this.http.delete('/api/messages/' + id);
    }
    // temp uses mail since my personal calendar = empty usually
    /**
     * gets calendar info
     */
    getCalendar(cookie) {
        
        return this.http.get('/api/calendar?accesstoken='+cookie);
    }
   
    /**
     * gets all channels
     */
    getChannelContent() {
        return this.http.get('/api/content');
    }
    /**
     * add a channel
     * @param newContent formdata
     */
    createContent(newContent){
        return this.http.post('/api/content',newContent);
    }
    /**
     * saves/ updates the object
     */
    saveContent(obj) {
        return this.http.put('/api/content', obj);
    }
    /**
     * gets a single channel
     */
    getChannel(channel) {
        return this.http.get('api/content/' + channel);
    }
    /**
     * deletes a single channel
     */
    deleteChannel(channelobj) {
        return this.http.delete('api/content/' + channelobj.channel);
    }
}
