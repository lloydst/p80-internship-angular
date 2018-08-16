import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminChannelsContentsComponent } from './admin-channels-contents.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('AdminChannelsContentsComponent', () => {
    let component: AdminChannelsContentsComponent;
    let fixture: ComponentFixture<AdminChannelsContentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminChannelsContentsComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],

            schemas: [NO_ERRORS_SCHEMA],
            providers: [DataService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminChannelsContentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
