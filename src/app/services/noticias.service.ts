import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) {  }
  getTopHeadlines() {
    return this.http.get<Noticias>(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=b6e5a92a4b2c433c89e10d9468ff4481`);
  }
  getTopHeadlinesCategoria(categoria: string) {
    return this.http.get<Noticias>(`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=b6e5a92a4b2c433c89e10d9468ff4481`);
  }



}
