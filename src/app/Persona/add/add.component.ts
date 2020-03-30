import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Produto } from 'src/app/modelo/Produto.model';
import { photoService } from 'src/app/Service/photo.service';
import { Photos } from 'src/app/modelo/photos.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})  
export class AddComponent implements OnInit {

  produto: Produto = new Produto;   
  produtos: Produto[];
  book: Photos = new Photos;

  constructor(private routes: Router, private serviceService: ServiceService, private photoService: photoService) { }

  ngOnInit() { }

  salvar(){
    this.serviceService.createProduto(this.produto)
      .subscribe(data =>{
        console.log(data);
          alert("Salvo com Sucesso no Database...!!!");
           this.routes.navigate(["listar"]);          
      });
  }
  salvar2(){
    this.photoService.savePhotoImage(this.book)
      .subscribe(data =>{
        console.log(data);
        alert("photo salva com Sucesso no Database...!!!");
      })
  }

  salvar3(){
    this.photoService.savePhoto(this.book)
      .subscribe(data =>{
        console.log(data);
        alert("photo salva com Sucesso no Database...!!!");
      })
    }
}
