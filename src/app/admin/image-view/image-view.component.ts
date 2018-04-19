import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

/**
 * displays all images stored in db
 */
@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
  /**
   * binding
   */
image;
/**
 * constructor
 * @param fileService gets files (images) from the db
 */
  constructor(private fileService: FileService) { }
/**
 * on load
 */
  ngOnInit() {
    this.getAllImages()
  }
  /**
   * gets all the images
   */
  getAllImages() {
    this.fileService.getImages().subscribe(images=>{
      this.image = images
    })
  }
}
