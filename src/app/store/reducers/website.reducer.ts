
//import { Action } from '@ngrx/store';
import * as websiteActions from '../actions/website.actions';
import {Website} from '../../models/website'

/**
 * interface to serve as a model for the shape of the website state
 */
export interface WebsiteState {
    /**
     * defines the shape
     */
    website: Array<Website>;
}
/**
 * setting the initial website state to be a empty array
 */
export const initialState: WebsiteState = {
    website: []
};
/**
 * function to get a single website from the state by way of a index
 * @param state state of the application
 * @param action to use
 * @param index number to serve as a index
 */
export const getSingle = (state: WebsiteState, action:websiteActions.WebsiteActions, index) => {
    state.website[index]
};
/**
 * example function to get a single url out of a website
 * @param state 
 * @param index 
 */
export const getSingleUrl = (state: WebsiteState, index) => {
    state.website[index].url
};

/**
 * based on the action type it will use a diferent function
 * @param state state of the application
 * @param action action to handle
 */
export function reducer(state = initialState, action: websiteActions.WebsiteActions): WebsiteState {
  switch (action.type) {
    case websiteActions.WebsiteActionTypes.SetWebsites:
        return handleSetWebsites(state, action);

    default:
      return state;
  }
}
/**
 * sets the websites in the state 
 * @param state state of the application
 * @param action action to undertake
 */
function handleSetWebsites(state: WebsiteState, action: websiteActions.SetWebsites): WebsiteState {
    return {
      ...state,
      website: action.payload
    };
  }