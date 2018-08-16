import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('AdminComponent', () => {
    let component: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdminComponent,
                AdminSideNavComponent
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            imports: [ RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
