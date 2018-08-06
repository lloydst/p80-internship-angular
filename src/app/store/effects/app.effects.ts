import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

/**
 * changes made to the app state (crud changes)
 */
@Injectable()
export class AppEffects {
/**
 * needed a docblock
 * @param actions$ action
 */
  constructor(private actions$: Actions) {}
}
