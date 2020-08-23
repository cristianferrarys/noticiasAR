import { NoticiasService } from './../../services/noticias.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  @ViewChild( IonSegment ) segment: IonSegment;
  
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  categorias_cp = ['negocio', 'entretenimiento', 'general', 'salud', 'ciencia', 'deportes', 'tecnología'];
  noticias: Article[] = [];
  
  constructor(private servio: NoticiasService){}

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  cambiodeCategoria( event ) {
    const catego_actual = event.detail.value;
    this.noticias = [];
    this.cargarNoticias(catego_actual);
    console.log(event.detail.value);

  }
  cargarNoticias ( categoria: string) {
    this.servio.getTopHeadlinesCategoria(categoria)
      .subscribe( (resp) => {
        this.noticias.push(...resp.articles);
      });
  }

}
