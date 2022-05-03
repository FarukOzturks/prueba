import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable, of } from "rxjs";
import {map} from'rxjs/operators';


import {COCHES} from "./coches.json";
import {Coches} from "./coches";



@Injectable({
  providedIn: 'root'
})
export class CocheService {

  private url: string = 'http://localhost:8080/api/coches';

  constructor(private http: HttpClient) { }


  getCoches(): Observable<Coches[]>{

      ///return of(COCHES);
    return this.http.get<Coches[]>(this.url)

  }
}
