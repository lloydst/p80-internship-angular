import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEntranceDetailComponent } from './admin-entrance-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
  

describe('AdminEntranceDetailComponent', () => {
  let component: AdminEntranceDetailComponent;
  let fixture: ComponentFixture<AdminEntranceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntranceDetailComponent ],
      imports:[ ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers:[DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntranceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
