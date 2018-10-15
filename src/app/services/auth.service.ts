
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * ip service
 */
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    /**
     * constructor
     * @param http http client
     */
    constructor(private http: HttpClient) { }
    /**
     * just a function
     */
    getLoggedIn() {
        return this.http.get('/api/authorize',{withCredentials:true});
    }
    /**
     * logout of graph
     */
    logOut() {
        return this.http.get('/api/authorize/signout');
    
    }
}




