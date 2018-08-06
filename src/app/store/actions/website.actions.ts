
import { Action } from '@ngrx/store';

export enum WebsiteActionTypes {
    LoadWebsites = '[Website] Load Websites',
    SetWebsites = '[Website] Set Websites',
    LoadSingleWebsite = '[Website] Load Single Website',
    UpdateWebsite = '[Website] Set Websites',
    DeleteWebsite = '[Website] Delete Website'
}

//read
export class LoadWebsites implements Action {
    readonly type = WebsiteActionTypes.LoadWebsites;
}

// set in store
export class SetWebsites implements Action {
    readonly type = WebsiteActionTypes.SetWebsites;

    constructor(public payload: any) { }
}

// get by id
export class LoadSingleWebsite implements Action {
    readonly type = WebsiteActionTypes.SetWebsites;

}

// update by id
export class UpdateWebsite implements Action {
    readonly type = WebsiteActionTypes.SetWebsites;

    constructor(public payload: any) { }
}

export class DeleteWebsite implements Action {
    readonly type = WebsiteActionTypes.DeleteWebsite;

  constructor(public payload: { id: string }) {}
}

export type WebsiteActions = LoadWebsites | SetWebsites;