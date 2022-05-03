import {Component} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listaCoches: string [] = ['Ferrari', 'Mercedez', 'Audi', 'Porche'];

  habilitar: boolean = true;

  constructor() {
  }

  SetMostrar(): void{
    this.habilitar = this.habilitar!=true;


  }

}
