import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaService } from './mascota.service';

interface Mascota {
  nombre: string;
  propietario: string;
}

// un componente tiene html, ts, css (scss)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
  providers: [MascotaService],
  standalone: true,
})
export class AppComponent {
  // mascotas = [
  //   {
  //     nombre: 'Tomy',
  //     propietario: 'Arthur',
  //   },
  //   {
  //     nombre: 'Pipo',
  //     propietario: 'Arthur',
  //   },
  //   {
  //     nombre: 'Lunita',
  //     propietario: 'Diana',
  //   },
  // ];

  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {
    this.mascotaService.findAll().subscribe((mascotasBackend) => {
      this.mascotas = mascotasBackend.map((mascotaBackend) => ({
        nombre: mascotaBackend.nombre,
        propietario: mascotaBackend.dueño,
      }));
    });
  }
}
