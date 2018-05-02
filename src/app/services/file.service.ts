import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

/**
 * fileservice responsible for posting the file's to the server
 */
@Injectable()

export class FileService {

/**
 * allows for downloads * not currentl in use
 * http property
 * @param _http http prop
 */
    constructor(private _http:HttpClient){}
/**
 * takes the file and puts it in the post request
 */
    downloadFile(file:String){
        var body = {filename:file};

        return this._http.post('http://localhost:3000/file/download',body,{
            responseType : 'blob',
            headers:new HttpHeaders().append('Content-Type','application/json')
        });
    }
    /**
     * gets all files(images) out of db the component has to subscribe to this
     */
    getImages() {
            return this._http.get('/images/images-all');
    }
    /**
     * deletes a img
     * @param img filename of img to delete
     */
    deleteImg(img) {
        let done = true
            return this._http.delete('/images/img/' + img)
    }
}