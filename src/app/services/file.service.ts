import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

/**
 * fileservice
 */
@Injectable()

export class FileService {
/**
 * my constructor
 * @param _http for http calls
 */
    constructor(private _http:HttpClient){}
/**
 * allows for downloads * not currentl in use
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
            return this._http.get('/images-all');
    }
}