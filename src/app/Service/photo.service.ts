import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailFone } from '../modelo/DetailFone';
import { Produto } from '../modelo/Produto.model';
import { Photos } from '../modelo/photos.model';

@Injectable({
  providedIn: 'root'
})
export class photoService {

  constructor(private http: HttpClient) { }

  ApiRestUrl="http://localhost:8093/check";
  ApiRestPhoto="http://localhost:8093/image";

  getPhoto(){
    return this.http.get<Photos[]>(`${this.ApiRestUrl}`);
  }

  savePhotoImage(Book:Photos){
    return this.http.post(`${this.ApiRestPhoto}/saveBook`, Book)
  }

  savePhoto(Book:Photos){
    return this.http.post(`${this.ApiRestPhoto}/add`, Book)
  }

  
}
