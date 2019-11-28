import { Component, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(SearchComponent, { static: false })
  private searchComp: SearchComponent;
  constructor(private http: HttpClient) { }
  films: any = [];
  isLoading = false;
  onSearch() {
    this.isLoading = true;
    this.http.get('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt3896198&apikey=524c947d&s=' + this.searchComp.title)
      .subscribe((res: any) => {
        this.films = res.Search;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      });
  }
}



