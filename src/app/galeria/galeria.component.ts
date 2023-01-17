import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  deducibles = ['Vivienda', 'Salud', 'Educacion'];
  informacion() {
    alert('Esta es información adicional');
  }
  borrarDeducible(deducible: string) {
    for (let i = 0; i < this.deducibles.length; i++) {
      if (deducible == this.deducibles[i]) {
        this.deducibles.splice(i, 1);
      }
    }
  }
}

