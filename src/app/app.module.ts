/**
 * angular module's and routing
 */

import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NguiMapModule } from '@ngui/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * components
 */
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ChannelsModule } from './channels/channels.module';

/**
 * services
 */
import { DataService } from './services/data.service';

import { NewsService } from './services/news.service';
import { WeatherService } from './services/weather.service';
import { FileService } from './services/file.service';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { WebsiteEffects } from './store/effects/website.effects';
import { AuthService } from './services/auth.service';

import { DndModule } from '@beyerleinf/ngx-dnd';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AdminModule,
        ChannelsModule,
        ComponentsModule,
        AppRoutingModule,
        FileUploadModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects, WebsiteEffects]),
        DndModule.forRoot()
    ],
    providers: [
        DataService,
        NewsService,
        WeatherService,
        FileService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
