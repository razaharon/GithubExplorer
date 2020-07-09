import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {path: 'search', component: SearchPageComponent},
  {path: 'favorites', component: FavoritesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
