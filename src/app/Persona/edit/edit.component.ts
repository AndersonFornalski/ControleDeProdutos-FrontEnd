import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Produto } from 'src/app/modelo/Produto.model';
import { FoneService } from 'src/app/Service/fone.service';
import { DetailFone } from 'src/app/modelo/DetailFone';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  produto: Produto = new Produto(); 
  telefone: DetailFone = new DetailFone();
  
  constructor(private router: Router, private service: ServiceService, private foneService:FoneService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getProdutoId(+id)
      .subscribe(data =>{
        console.log(data);
        this.produto = data;
      })
  }

  Atualizar(produto: Produto){
     this.service.updateProduto(produto)
      .subscribe(data =>{
        this.produto = data;
          alert("Atualizado com Sucesso...!!!")
           this.router.navigate(["listar"])
      })

  }

  delFones(id){
    if(id !== null && confirm("Tem Certeza Que Deseja Remover?") ){
      this.foneService.deleteFone(id)
        .subscribe(data => {
         const position = this.produto.fones.indexOf(id)//para excluir linha apos deletar do banco de dados
         this.produto.fones.splice(position,1);

          console.log(data)
          
        })
    }
  }

  addFone(){   
      
      this.foneService.adicionaFones(this.produto)
      .subscribe(data =>{            
        console.log(data)
        this.produto.fones.push(this.telefone)
        
     })
    
 }

}
