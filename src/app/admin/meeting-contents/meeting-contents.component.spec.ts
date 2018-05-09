import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingContentsComponent } from './meeting-contents.component';

describe('MeetingContentsComponent', () => {
  let component: MeetingContentsComponent;
  let fixture: ComponentFixture<MeetingContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
