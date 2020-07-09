import { Component } from '@angular/core';
import { Item } from '../../interfaces/item';
import { RepositoriesService } from '../../services/repositories.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  public items: Item[] = [];

  constructor(private _repositories: RepositoriesService) { }

  public getRepositories(value): void {
    this._repositories.getRepositories(value)
    .then(response => this.items = response.items)
    .catch(err => alert(err.error.message || "Error, please try again."));
  }
}
