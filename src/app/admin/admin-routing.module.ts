import { TopPurchasesComponent } from './top-purchases/top-purchases.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  {
  path:'', component: AdminComponent, 
  children:[
  { path: 'create=cast', component: CreateCastComponent},
  { path: 'create-movie', component: CreateMovieComponent},
  { path: 'top-purchases', component: TopPurchasesComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
