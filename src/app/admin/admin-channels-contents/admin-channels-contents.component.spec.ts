import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChannelsContentsComponent } from './admin-channels-contents.component';

describe('AdminChannelsContentsComponent', () => {
  let component: AdminChannelsContentsComponent;
  let fixture: ComponentFixture<AdminChannelsContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChannelsContentsComponent ]
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
