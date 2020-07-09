import { Injectable, EventEmitter } from '@angular/core';
import { GitResponse } from '../interfaces/git-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private readonly url = 'https://api.github.com/search/repositories';

  constructor(private _http: HttpClient) { }

  public getRepositories(searchValue: string): Promise<GitResponse> {
    return this._http.get<GitResponse>(this.url, { params: { q: searchValue } }).toPromise();
  }



}
