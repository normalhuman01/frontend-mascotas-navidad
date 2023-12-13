import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface MascotaBackend {
  id: number;
  nombre: string;
  dueño: string;
}

@Injectable()
export class MascotaService {
  constructor(private http: HttpClient) {}

  findAll() {
    // return [{
    //   nombre: "lalala",
    //   dueño: "arthur"
    // }]
    return this.http.get<MascotaBackend[]>('http://localhost:8080/mascotas');
  }

  register(mascota: any) {
    return this.http.post('http://localhost:8080/mascotas', mascota);
  }
}
