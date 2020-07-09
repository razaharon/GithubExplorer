import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    GalleryComponent,
    SearchPageComponent,
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    HttpClientModule
  ],
  exports: [SearchPageComponent]
})
export class RepositoriesModule { }
