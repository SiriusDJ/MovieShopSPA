import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component:MoviesComponent,
    children: [
      {path: 'details/:id', component: MovieDetailsComponent},
      {path: 'cast/details/:id', component: CastDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
