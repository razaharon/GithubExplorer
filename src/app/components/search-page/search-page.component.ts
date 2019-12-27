import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  items: Item[] = [];

}
