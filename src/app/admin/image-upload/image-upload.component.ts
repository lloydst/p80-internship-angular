import { Component, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

/**
 * base url in dev
 */
const URL = 'http://localhost:3000/upload';
/**
 * file upload component
 */
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  
})

export class ImageUploadComponent {
  /**
   * setting it
   */
    public uploader:FileUploader = new FileUploader({url: URL});
    
  
}


