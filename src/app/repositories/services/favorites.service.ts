import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public favorites: BehaviorSubject<Item[]>;

  constructor() {
    this.favorites = new BehaviorSubject<Item[]>(this.getFavorites());
   }

  private getFavorites(): Item[] {
    return JSON.parse(sessionStorage.getItem('favorites')) || [];
  }

  public favorite(item: Item): void {
    let index = this.favorites.value.findIndex(r => r.id === item.id);
    if (index >= 0) {
      this.removeFavorite(index);
    } else {
      this.addFavorite(item);
    }
    this.saveFavorites();
  }

  private addFavorite(item: Item): void {
    let items = this.favorites.value;
    items.push(item);
    this.favorites.next(items);
  }

  private saveFavorites(): void {
    sessionStorage.setItem('favorites', JSON.stringify(this.favorites.value));
  }

  private removeFavorite(index: number): void {
    let items = this.favorites.value;
    items.splice(index, 1);
    this.favorites.next(items);
  }
}
