import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
image;
  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getAllImages()
  }
  getAllImages() {
    this.fileService.getImages().subscribe(images=>{
      this.image = images
    })
  }
}
