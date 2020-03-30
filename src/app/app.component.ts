import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud3';

  //criando um construtor para os paginas do app.component.html
  constructor(private router:Router){}

  Example(){
    this.router.navigate(["example"]);
  }

  //criando método listar do botao do html Listar()
  Listar(){
    this.router.navigate(["listar"]);//O "listar" que foi criado no app-routing.module.ts(modulo principal,global)
  }

  Novo(){
    this.router.navigate(["add"]);
  }

}
