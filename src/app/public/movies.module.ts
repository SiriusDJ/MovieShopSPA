import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MoviesComponent } from './movies.component';
import { GenreComponent } from './genre/genre.component';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    CastDetailsComponent,
    MoviesComponent,
    GenreComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
