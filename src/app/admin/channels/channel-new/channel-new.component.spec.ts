import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelNewComponent } from './channel-new.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ListingComponentsComponent } from '../listing-components/listing-components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('ChannelNewComponent', () => {
  let component: ChannelNewComponent;
  let fixture: ComponentFixture<ChannelNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelNewComponent,
    ListingComponentsComponent ],
    imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
    providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelNewComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
