import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    //console.log("El servicio porfolio está corriendo");
    return this.http.get ('json');
  }
}
