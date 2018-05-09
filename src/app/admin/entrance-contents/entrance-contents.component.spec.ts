import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceContentsComponent } from './entrance-contents.component';

describe('EntranceContentsComponent', () => {
  let component: EntranceContentsComponent;
  let fixture: ComponentFixture<EntranceContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
