import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelContentComponent } from './channel-content.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ChannelContentComponent', () => {
  let component: ChannelContentComponent;
  let fixture: ComponentFixture<ChannelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
