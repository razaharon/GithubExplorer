import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { RepositoriesService } from 'src/app/services/repositories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  items: Item[];
  favorites: Item[];

  constructor(
    private _repositories: RepositoriesService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || "[]");
    if (this._route.snapshot.url[0].path === 'favorites')
      this.items = this.favorites;
    this._repositories.itemsUpdates.subscribe(items => this.items = items);
  }

  public showFavoriteIcon(event): void {
    event.target.children[1].children[1].style.cssText = 'visibility: visible';
  }

  public hideFavoriteIcon(event): void {
    event.target.children[1].children[1].style.cssText = 'visibility: hidden';
  }

  public favorite(item: Item, event): void {
    event.preventDefault();
    if (this.favorites.includes(item)) {
      let index = this.favorites.findIndex(favoriteItem => favoriteItem.id === item.id)
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(item);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  public openRepository(url: string): void {
    window.open(url);
  }
}
