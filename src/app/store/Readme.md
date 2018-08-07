## redux store
this file is mostly a how too for myself

# adding ngrx (state) to your app
`npm install @ngrx/schematics --save-dev`

`ng config cli.defaultCollection @ngrx/schematics`

the last command sets up your angular cli so that you can use ngrx schematics

## install ngrx packages
`npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save`

## generate store folder in app folder with root reducer
`ng generate store State --root --statePath store/reducers --module app.module.ts`

after this command you will need to fix the following line in app.module (point it too your environments folder)

`import { environment } from ‘../../../environments/environment’;` most likely it will be just a single ../

unfortunatly the ngrx schematics arent the smartest thing

# generate
name is just a place holder it should also not a plural; so book as a 'name' is good but 'books' is bad

## action
action (definitions)
`ng generate action store/actions/name --actions index.ts`
## reducer
state, initial state, state functions
`ng generate reducer store/reducers/name --reducers index.ts`
## effects
http request for instance
`ng generate effect store/effects/name --module app.module --root true`
needs the following imports on a component if you want to make http calls too/from the state: 

`import { Injectable } from '@angular/core';`

`import { Actions, Effect, ofType } from '@ngrx/effects';`

`import { Observable } from 'rxjs';`

`import { HttpClient } from '@angular/common/http';`

`import * as nameActions from '../actions/name.actions';` (name is just a placeholder)

`import { Action } from '@ngrx/store';`

`import { switchMap, map } from 'rxjs/operators';`

## final

the most basic structure you should see is:

(...)
src
 - app
     - store
        - actions
             - name.actions.ts
        - effects
             - name.effects.ts
        - reducers
             - index.ts
             - name.reducer.ts

(...)