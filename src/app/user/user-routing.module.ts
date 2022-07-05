import { UserComponent } from './user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path:'', component: UserComponent, 
    children:[
      { path: 'purchases', component: PurchasesComponent},
      { path: 'favorites', component: FavoritesComponent},
      { path: 'reviews', component: ReviewsComponent},
      { path: 'edit-profile/:id', component: EditProfileComponent}
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
