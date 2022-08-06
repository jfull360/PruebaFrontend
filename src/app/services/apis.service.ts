import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { consulta } from '../models/consulta';
import { documentoPersona } from '../models/documentopersona';
import { catalogoSelect } from '../models/catalogoSelect';

@Injectable({
  providedIn: 'root'
})
export class Service {

  protected url = environment.url;
  protected header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    protected httpClient: HttpClient
  ) { }

  public consultar(item: consulta): Observable<any> {
    return this.httpClient.post<documentoPersona>(`${this.url}api/documentoPersona/search`, item);
  }

  public consultar_catalogo(): Observable<any> {
    return this.httpClient.get<catalogoSelect[]>(`${this.url}api/documentos/options`);
  }


}
