import { Component } from '@angular/core';
import { Photos } from '../photos';
@Component({
  selector: 'app-car-photo',
  templateUrl: './car-photo.component.html',
  styleUrls: ['./car-photo.component.css']
})
export class CarPhotoComponent {
  itemsList: string[] = Photos;
}
