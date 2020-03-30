import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { DetailFone } from 'src/app/modelo/DetailFone';

@Component({
  selector: 'app-add-detalhes',
  templateUrl: './add-detalhes.component.html',
  styleUrls: ['./add-detalhes.component.css']
})
export class AddDetalhesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
