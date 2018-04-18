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
}