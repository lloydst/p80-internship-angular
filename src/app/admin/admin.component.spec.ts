import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';



@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

@Component({selector: 'app-admin-side-nav', template: ''})
class AdminSideNavStubComponent {}

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AdminComponent,
        RouterOutletStubComponent,
        AdminSideNavStubComponent ],
        imports: [ RouterTestingModule ]
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
