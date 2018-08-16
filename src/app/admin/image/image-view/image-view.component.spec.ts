import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageViewComponent } from './image-view.component';
import { FileService } from '../../../services/file.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewComponent ],
      providers: [FileService],
      imports: [HttpClientTestingModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
