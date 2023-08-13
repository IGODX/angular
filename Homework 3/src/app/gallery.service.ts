import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getPicturesWithDescription(): Observable<Image[]> {
    return this.http.get("assets/imageDetails.json").pipe(map((data: any) => {
      let images = data["images"];
      return images.map((item: any) => {
        return { id: item.id, title: item.title, year: item.year, author: item.author, location: item.location, imageUrl: item.imageUrl };
      });
    }));
  }
}
