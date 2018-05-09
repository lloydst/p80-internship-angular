import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportContentsComponent } from './support-contents.component';

describe('SupportContentsComponent', () => {
  let component: SupportContentsComponent;
  let fixture: ComponentFixture<SupportContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
