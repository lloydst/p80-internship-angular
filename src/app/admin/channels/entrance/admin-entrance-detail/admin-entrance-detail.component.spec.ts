import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntranceDetailComponent } from './admin-entrance-detail.component';

describe('AdminEntranceDetailComponent', () => {
  let component: AdminEntranceDetailComponent;
  let fixture: ComponentFixture<AdminEntranceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntranceDetailComponent ]
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
