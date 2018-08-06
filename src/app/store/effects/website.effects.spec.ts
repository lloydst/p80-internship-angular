import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WebsiteEffects } from './website.effects';

describe('WebsiteEffects', () => {
  let actions$: Observable<any>;
  let effects: WebsiteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WebsiteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WebsiteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
