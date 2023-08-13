import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Image } from '../image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[] = [];
  constructor(private galleryService : GalleryService) {}
  ngOnInit(): void {
    this.galleryService.getPicturesWithDescription().subscribe(data => this.images = data);
  }

}
