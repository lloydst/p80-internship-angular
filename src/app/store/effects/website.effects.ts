import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as websiteActions from '../actions/website.actions';
import { switchMap, map } from 'rxjs/operators';

/**
 * effects
 */
@Injectable()
export class WebsiteEffects {
    /**
     * constructor
     * @param actions$ action
     * @param http http call
     */
    constructor(private actions$: Actions,
        private http: HttpClient) { }

    /**
     * gets the websites from the api
     */
    @Effect()
    loadWebsites$: Observable<Action> = this.actions$.pipe(
        ofType(websiteActions.WebsiteActionTypes.LoadWebsites),
        switchMap(() => {
            return this.http.get<string>('/api/websites')
                .pipe(
                    map((res) => {
                        return new websiteActions.SetWebsites(res);
                    })
                );
        })
    );
}
