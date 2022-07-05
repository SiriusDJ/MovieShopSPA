import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/model/MovieCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies!: MovieCard[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log('Inside the Home Component init method')
    // Angular Life Cycle Hook method
    // it is not gonna be executed until you subscribe to an observable
    this.movieService.getTopGrossingMovies().subscribe( m => {
      this.movies = m;
      console.log(this.movies)
    });
  }

}
