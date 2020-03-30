import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/Produto.model';
import { ServiceService } from '../Service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailFone } from '../modelo/DetailFone';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit { 
  
  fone: DetailFone = new DetailFone;
  fones: DetailFone[];

  id: number;
  produto: Produto;
  

  constructor(private service:ServiceService, private router: Router, private rout:ActivatedRoute) { }

  ngOnInit() {
    this.service.getDetalhes()
      .subscribe(data =>{
        console.log(data);
          this.fones = data;
      })     


    this.produto = new Produto();

    this.id = this.rout.snapshot.params['id'];

    this.service.getProdutoId(this.id)
      .subscribe(data =>{
        console.log(data);
        this.produto = data;
      },Error => console.log(Error));
  }   
  
  saveFone(){
    this.service.createDetalhes(this.fone)
     .subscribe(data =>{
       console.log(data);
       alert("fones salvos com sucesso...!!!")
     }, error => console.log('verificar erro:' + error));
  }

  /*addFone( produt: Produto, detalhes: DetailFone){
    this.service.addFones(produt.id,detalhes.produto)
     .subscribe(data =>{
       console.log(data);
       alert("fones salvos com sucesso...!!!")
     }, error => console.log('verificar erro:' + error));
  }*/
}
