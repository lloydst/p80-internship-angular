import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageUploadComponent } from './image-upload.component';
import { ImageViewComponent } from '../image-view/image-view.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadComponent, ImageViewComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FileService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
