import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  articles: Article[] = [];

  constructor(private noticias: NoticiasService ) { }

  ngOnInit() {
    this.noticias.getTopHeadlines().subscribe( resp  => {
      console.log(resp);
      this.articles.push(...resp.articles);
    });
  }

}
