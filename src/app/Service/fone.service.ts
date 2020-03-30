import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailFone } from '../modelo/DetailFone';
import { Produto } from '../modelo/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class FoneService {

  constructor(private http: HttpClient) { }

  ApiRestUrl="http://localhost:8093/produto";

  adicionaFones(prod: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.ApiRestUrl}/saveDireto/`,prod);
  }
  
  deleteFone(id: number): Observable<any>{
    return this.http.delete(`${this.ApiRestUrl}/telefone/${id}`);
  }
}
