import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articulos: any;
  constructor(private http: HttpClient) { }
  ngOnInit():void {
    let url = `https://pokeapi.co/api/v2/pokemon/ditto`; 
    this.http.get(url).subscribe(
      (response:any) => { this.articulos = response})
  }
}
