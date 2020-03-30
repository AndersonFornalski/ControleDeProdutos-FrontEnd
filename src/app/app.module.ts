import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ServiceService } from './Service/service.service';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExampleComponent } from './example/example.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './component/login/login.component';
import { FoneService } from './Service/fone.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    DetalhesComponent,
    ExampleComponent,
    //LoginModule,
    LoginComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ServiceService, FoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
