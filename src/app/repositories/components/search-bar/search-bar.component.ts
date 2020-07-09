import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input() public inputPlaceholder: string;
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();

  public onSearch(value: string): void {
    this.search.emit(value);
  }

  keyPress(event, value): void {
    if (event.key === "Enter")
    this.search.emit(value);
  }

}
