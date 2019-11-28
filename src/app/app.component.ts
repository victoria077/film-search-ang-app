import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) {}

  name = '';
  films: any = [];
  onSearch() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt3896198&apikey=524c947d&s=batman')
    .subscribe((res: any) => {
      console.log(res.Search);
      this.films = res.Search;
    });
  }
}



