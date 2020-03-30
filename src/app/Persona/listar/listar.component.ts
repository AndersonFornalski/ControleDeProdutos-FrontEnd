import { Component, OnInit } from '@angular/core';
import { ServiceService }from '../../Service/service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'util';
import { Produto } from 'src/app/modelo/Produto.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

 //declarando variavel do objeto Persona. modelo/Persona
 produtos: Produto[];  //essa variavel "personas" é usado no *ngFor do table do html


 constructor(private service:ServiceService, private router: Router) { }

  ngOnInit() {     
       
   this.service.getProdutos()
      .subscribe(data=>{
        this.produtos=data;
    })
  }

  Editar(produto: Produto): void{
    localStorage.setItem("id", produto.id.toString());
    this.router.navigate(["edit"]);
  }


  DeleteProduto(id: number){
    this.service.deleteAllProduto(id)
      .subscribe(data =>{      
        console.log(data);
        alert("Excluido com Sucesso...!!!");
        this.router.navigate(["add"]);
      },
      error => console.log('verificar erro:' + error));
  }  

  detalhes(id: number){
    this.router.navigate(["detail", id])
      
  }
}
