import { Component } from '@angular/core';
import { Item } from '../../interfaces/item';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent {

  public favorites: Item[];

  constructor(private _favorites: FavoritesService) {
    this._favorites.favorites.subscribe(items => this.favorites = items);
   }

}
