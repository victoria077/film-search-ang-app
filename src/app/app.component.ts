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
  onSearch() {
    console.log(this.searchComp.title);
    this.http.get('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt3896198&apikey=524c947d&s=' + this.searchComp.title)
      .subscribe((res: any) => {
        console.log(res);
        this.films = res.Search;
      });
  }
}



