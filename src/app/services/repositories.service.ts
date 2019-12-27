import { Injectable, EventEmitter } from '@angular/core';
import { GitResponse } from '../interfaces/git-response';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private readonly url = 'https://api.github.com/search/repositories';
  public readonly itemsUpdates: EventEmitter<Item[]> = new EventEmitter<Item[]>();
  public items: Item[];

  constructor(
    private _http: HttpClient
  ) { }

  public getRepositories(searchValue: string): void {
    this._http.get<GitResponse>(this.url, { params: { q: searchValue } }).toPromise()
    .then(
        data => {
          this.items = data.items;
          this.itemsUpdates.emit(this.items);
        },
        err => alert(err.message)
      )
      .catch(err => alert(err.message));
  }
}
