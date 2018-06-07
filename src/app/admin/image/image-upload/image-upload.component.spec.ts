import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadComponent } from './image-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileService } from '../../../services/file.service';

describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;

  @Component({selector: 'app-image-view', template: ''})
class ImageViewComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadComponent,
        ImageViewComponent,
        FileSelectDirective
      ],
      providers:[FileService],
      imports:[
        ReactiveFormsModule
      ]
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
