import { Component, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

/**
 * defining where to POST too
 */
const URL = '/images/upload';
/**
 * upload Component
 */
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  
})
export class ImageUploadComponent {
  /**
   * binding uploader to FileUploader from ng2-file-upload
   */
    public uploader:FileUploader = new FileUploader({url: URL});
    
  
}


