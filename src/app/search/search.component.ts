import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  title: string = '';
  @Output() onSearch = new EventEmitter();
  search(data) {
    this.onSearch.emit(data);
  }
}
