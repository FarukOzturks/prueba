import {Component, OnInit} from '@angular/core';
import {Coches} from "./coches";
import {CocheService} from "./coche.service";


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html'
})
export class CochesComponent implements OnInit {


  coches: Coches [];

  constructor(private cocheService: CocheService) {
  }

  ngOnInit(): void {
    this.cocheService.getCoches()
      .subscribe(coches => this.coches = coches);
  }


}
