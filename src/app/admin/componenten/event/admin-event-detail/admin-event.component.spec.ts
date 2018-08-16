import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEventDetailComponent } from './admin-event-detail.component';
import { ImageViewComponent } from '../../../image/image-view/image-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FileService } from '../../../../services/file.service';


describe('AdminEventDetailComponent', () => {
  let component: AdminEventDetailComponent;
  let fixture: ComponentFixture<AdminEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventDetailComponent, ImageViewComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[DataService,FileService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
