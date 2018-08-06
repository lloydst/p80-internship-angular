
//import { Action } from '@ngrx/store';
import * as websiteActions from '../actions/website.actions';
import {Website} from '../../models/website'

export interface WebsiteState {
    website: Array<Website>;
}

export const initialState: WebsiteState = {
    website: []
};
export const getSingle = (state: WebsiteState, action:websiteActions.WebsiteActions, index) => state.website[index];
export const getSingleUrl = (state: WebsiteState, index) => state.website[index].url;

export function reducer(state = initialState, action: websiteActions.WebsiteActions): WebsiteState {
  switch (action.type) {
    case websiteActions.WebsiteActionTypes.SetWebsites:
        return handleSetWebsites(state, action);

    default:
      return state;
  }
}

function handleSetWebsites(state: WebsiteState, action: websiteActions.SetWebsites): WebsiteState {
    return {
      ...state,
      website: action.payload
    };
  }