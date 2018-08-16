
import { Action } from '@ngrx/store';

/**
 * all website types
 */
export enum WebsiteActionTypes {
    /**
     * Load function
     */
    LoadWebsites = '[Website] Load Websites',
    SetWebsites = '[Website] Set Websites',
    LoadSingleWebsite = '[Website] Load Single Website',
    UpdateWebsite = '[Website] Set Websites',
    DeleteWebsite = '[Website] Delete Website'
}

/**
 * defines the LoadWebsites type and its response
 */
export class LoadWebsites implements Action {
    /**
     * type
     */
    readonly type = WebsiteActionTypes.LoadWebsites;
}

/**
 * defines the SetWebsites type and its response
 */
export class SetWebsites implements Action {
    /**
     * type
     */
    readonly type = WebsiteActionTypes.SetWebsites;
/**
 * constructor
 * @param payload array of objects
 */
    constructor(public payload: any) { }
}

/**
 * defines the LoadSingleWebsite type and its response
 */
export class LoadSingleWebsite implements Action {
    /**
    * type
    */
    readonly type = WebsiteActionTypes.SetWebsites;

}

/**
 * defines the UpdateWebsite type and its response
 */
export class UpdateWebsite implements Action {
    /**
     * type
     */
    readonly type = WebsiteActionTypes.SetWebsites;
/**
 * a docblock
 * @param payload returns the object to update it wtith
 */
    constructor(public payload: any) { }
}

/**
 * defines the DeleteWebsites type and its response
 */
export class DeleteWebsite implements Action {
    /**
     * type
     */
    readonly type = WebsiteActionTypes.DeleteWebsite;
/**
 * constuctor
 * @param payload returns the id to delete
 */
    constructor(public payload: { id: string }) { }
}

export type WebsiteActions =
    LoadWebsites
    | SetWebsites;
