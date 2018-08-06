import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
 
import * as fromRoot from './store/reducers';
import * as fromWebsite from './store/reducers/website.reducer'
import * as websiteActions from './store/actions/website.actions';
import { Observable } from 'rxjs';
import { Website } from './models/website';

/**
 * some documentation
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    website$ :Observable<Website>
    constructor(private store: Store<fromRoot.RootState>) {}
 
    ngOnInit() {
      this.store.dispatch(new websiteActions.LoadWebsites());
      this.website$ = this.store.select('websites');
    }
}
