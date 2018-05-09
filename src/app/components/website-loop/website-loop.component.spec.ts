import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLoopComponent } from './website-loop.component';

describe('WebsiteLoopComponent', () => {
  let component: WebsiteLoopComponent;
  let fixture: ComponentFixture<WebsiteLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
