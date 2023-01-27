import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ngOnInit():void {}
  ruc:string='';
  valor:number=0.0;
  gasto:string='Escoja el tipo de gasto';
}
