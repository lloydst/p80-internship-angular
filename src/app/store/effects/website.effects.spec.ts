import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';
import { WebsiteEffects } from './website.effects';

describe('WebsiteEffects', () => {
  let actions$: Observable<any>;
  let effects: WebsiteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WebsiteEffects,
        provideMockActions(() => actions$)
      ],
      imports: [HttpClientTestingModule],
    });

    effects = TestBed.get(WebsiteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
