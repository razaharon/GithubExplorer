import { Component } from '@angular/core';
import { RepositoriesService } from 'src/app/services/repositories.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(
    private _repositories: RepositoriesService
  ) { }

  search(searchValue: string): void {
    if (searchValue)
      this._repositories.getRepositories(searchValue);
  }

  keyPress(event, value): void {
    if (event.key === "Enter")
      this.search(value);
  }

}
