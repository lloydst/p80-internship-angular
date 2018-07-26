import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AdminEntranceDetailComponent } from './admin-entrance-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from '../../../../services/data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


describe('AdminEntranceDetailComponent', () => {
  let component: AdminEntranceDetailComponent;
  let fixture: ComponentFixture<AdminEntranceDetailComponent>;
  
  // let http: HttpClient
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntranceDetailComponent ],
      imports: [ 
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
    FormsModule],
      providers:[
        DataService,
    ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    
    fixture = TestBed.createComponent(AdminEntranceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
    // 3. send a simple request
    http.get('/foo/bar').subscribe();

    // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
    // here two, it's significantly less boilerplate code needed to verify an expected request
    backend.expectOne({
      url: '/foo/bar',
      method: 'GET'
    });
  })
));
});
