import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExampleComponent } from './example/example.component';

//nessa rota ingresasr todos componente que estamos usando da pasta Persona
const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'listar', component: ListarComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
  {path:'detail', component: DetalhesComponent},
  {path:'example', component: ExampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
