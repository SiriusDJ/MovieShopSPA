import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/model/MovieCard';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

// HomeComponent will call this method
  getTopGrossingMovies() : Observable<MovieCard[]>{

    // https://localhost:7107/api/Movies/top-grossing -> Json array of movie cards
    // XMLHttpRequest call the server and retrieve data from a URL
    // We can use Angular HttpClient to create XMLHttpRequest to do that 

      return this.http.get<MovieCard[]>('https://localhost:7107/api/Movies/top-grossing');

  }

  getMovieDetails(id: number) {

  }

  getMovieByGenre(genreId: number) {

  }
}
