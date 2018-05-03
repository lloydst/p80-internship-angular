import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingComponent } from './meeting.component';
import { DataService } from '../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('MeetingComponent', () => {
  let component: MeetingComponent;
  let fixture: ComponentFixture<MeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ MeetingComponent ],
      providers: [DataService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
