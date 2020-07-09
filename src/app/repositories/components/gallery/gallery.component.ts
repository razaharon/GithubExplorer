import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() public items: Item[];
  public favorites: Item[];

  constructor(private _favorites: FavoritesService) {
    this._favorites.favorites.subscribe(items => this.favorites = items);
  }

  public showFavoriteIcon(event): void {
    event.target.children[1].children[1].style.cssText = 'visibility: visible';
  }

  public isFavorite(item: Item): boolean {
    return this.favorites.findIndex(rep => rep.id === item.id) >= 0;
  }

  public hideFavoriteIcon(event): void {
    event.target.children[1].children[1].style.cssText = 'visibility: hidden';
  }

  public favorite(item: Item, event): void {
    event.preventDefault();
    this._favorites.favorite(item);
  }

  public openRepository(url: string): void {
    window.open(url);
  }
}
