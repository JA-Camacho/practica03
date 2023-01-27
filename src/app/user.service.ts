import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…')
    }

    obtnerDatos(){return this.httpclient.get<User[]>('https://jsonplaceholder.typicode.com/users');}
}
