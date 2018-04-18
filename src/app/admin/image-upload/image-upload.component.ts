import { Component, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/upload';
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  
})
export class ImageUploadComponent {
    public uploader:FileUploader = new FileUploader({url: URL});
    
  
}


