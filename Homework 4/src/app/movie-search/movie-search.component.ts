import { Component } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';

@Component({
  selector: 'app-movie-search',
  template: `
    <div>
      <input [(ngModel)]="searchTitle" placeholder="Enter movie title">
      <button (click)="searchMovie()">Search</button>
    </div>
    <div *ngIf="movieInfo">
      <h2>{{ movieInfo.Title }}</h2>
      <p>Year: {{ movieInfo.Year }}</p>
      <p>Rating: {{ movieInfo.imdbRating }}</p>
      <p>Duration: {{ movieInfo.Runtime }}</p>
      <p>Director: {{ movieInfo.Director }}</p>
      <p>Actors: {{ movieInfo.Actors }}</p>
    </div>
  `
})
export class MovieSearchComponent {
  searchTitle: string = '';
  movieInfo: any;

  constructor(private movieService: MovieSearchService) {}

  searchMovie() {
    this.movieService.getMovieInfo(this.searchTitle).subscribe(data => {
      this.movieInfo = data;
             console.log(this.movieInfo);
    });

  }
}
