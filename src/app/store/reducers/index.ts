import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromWebsite from './website.reducer';

export interface RootState {
  website: fromWebsite.WebsiteState;
}

export const reducers: ActionReducerMap<RootState> = {
  website: fromWebsite.reducer,
};




export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
