import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelComponent } from './channel.component';
import { DataService } from '../../services/data.service';
import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChannelComponent', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
