import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
 
import * as fromRoot from './store/reducers';
import * as fromWebsite from './store/reducers/website.reducer'
import * as websiteActions from './store/actions/website.actions';
import { Observable } from 'rxjs';
import { Website } from './models/website';

/**
 * root component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'p80 interschip assignment'
    // all the comments are store related
    // website$ :Observable<Website>
    /**
     * constructor
     */
    constructor(/*private store: Store<fromRoot.RootState>*/) {}
 
    /**
     * on init wrapper function
     */
    ngOnInit() {
        /*
      this.store.dispatch(new websiteActions.LoadWebsites());
      this.website$ = this.store.select('websites');
      */
    }
}
