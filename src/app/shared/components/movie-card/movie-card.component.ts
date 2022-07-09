import { MovieCard } from 'src/app/shared/model/movie-card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movieCard!: MovieCard

  constructor() { }

  ngOnInit(): void {
  }

}
