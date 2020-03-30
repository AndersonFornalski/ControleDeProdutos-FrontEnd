import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../modelo/Produto.model';
import { observable, Observable } from 'rxjs';
import { DetailFone } from '../modelo/DetailFone';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
 //aqui fará a conexão com o Back-End(API-REst) 
  constructor(private http: HttpClient) { }

  ApiRestUrl="http://localhost:8093/produto";

 //Método Reader (listagem do Database)
  getProdutos(){
    return this.http.get<Produto[]>(`${this.ApiRestUrl}`);
  }
//Método pegar pelo id
  getProdutoId(id: number): Observable<any>{
    return this.http.get(`${this.ApiRestUrl}/${id}`);
  }
//Método Update   
    updateProduto(produto: Produto): Observable<Produto>{
      return this.http.put<Produto>(`${this.ApiRestUrl}/${produto.id}`, produto);
    }
//Método Create(Adicionado no Database)
  createProduto(produto: Produto): Observable<Produto>{
     return this.http.post<Produto>(`${this.ApiRestUrl}/saveDireto`, produto); 
  }    
//Método Deletar
  deleteAllProduto(id: number): Observable<any>{
    return this.http.delete(`${this.ApiRestUrl}/${id}`);
  }
  

  /////////////////////////DETALHES ABAIXO///////////////////////////

//salvando fone Detalhes
 createDetalhes(fones: DetailFone ): Observable<DetailFone>{
   return this.http.post<DetailFone>(`${this.ApiRestUrl}/saveDetalhes`,fones);
 }

 addFones(prod: Produto): Observable<Produto>{
  return this.http.post<Produto>(`${this.ApiRestUrl}/addDetalhe/`,prod);
}

 //Método Reader (listagem detalhes no Database)
 getDetalhes(){
  return this.http.get<DetailFone[]>(`${this.ApiRestUrl}/listaDetail`);
}

deleteFone(id: number): Observable<any>{
  return this.http.delete(`${this.ApiRestUrl}/telefone/${id}`);
}
}
