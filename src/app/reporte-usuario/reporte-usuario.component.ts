import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-reporte-usuario',
  templateUrl: './reporte-usuario.component.html',
  styleUrls: ['./reporte-usuario.component.css']
})
export class ReporteUsuarioComponent implements OnInit{
  ngOnInit(): void {
  }

  usuarios:User[]=[];
  constructor(private userService:UserService){
    this.userService.obtnerDatos().subscribe(data =>
      {
        console.log(data);
        this.usuarios=data;
      })
  }
}
