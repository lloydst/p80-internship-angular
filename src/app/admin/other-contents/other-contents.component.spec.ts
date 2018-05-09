import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContentsComponent } from './other-contents.component';

describe('OtherContentsComponent', () => {
  let component: OtherContentsComponent;
  let fixture: ComponentFixture<OtherContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
