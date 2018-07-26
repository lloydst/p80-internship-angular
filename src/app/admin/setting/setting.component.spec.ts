import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingComponent } from './setting.component';
import { Directive, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../services/data.service';
@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}
describe('SettingComponent', () => {
    let component: SettingComponent;
    let fixture: ComponentFixture<SettingComponent>;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers:[DataService]

        }).compileComponents();
        
            
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingComponent);
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        component = fixture.componentInstance;
        fixture.detectChanges();
        
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
