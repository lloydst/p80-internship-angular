import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventComponent } from './event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

describe('EventComponent', () => {
  let component: AdminEventComponent;
  let fixture: ComponentFixture<AdminEventComponent>;

  @Component({selector: 'app-image-view', template: ''})
class ImageViewComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventComponent,
        ImageViewComponent ],
      imports:[ReactiveFormsModule,
      RouterTestingModule,
    HttpClientTestingModule],
      providers:[
        DataService,
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
