import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromWebsite from './website.reducer';

/**
 * root state descibes every array of objects that can be in there
 */
export interface RootState {
    /**
     * website is a array
     */
  website: fromWebsite.WebsiteState;
}

/**
 * what reducer to use
 */
export const reducers: ActionReducerMap<RootState> = {
  website: fromWebsite.reducer,
};

/**
 * meta reducer hooks every thing together
 */
export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
