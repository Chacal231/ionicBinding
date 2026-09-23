import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Servicio } from '../servicio';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonToolbar, IonTitle } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonList, IonItem, IonLabel, IonTitle, CommonModule, IonItem],
})
export class GaleriaComponent implements OnInit {

  public tituloSeccion: string = 'Galeria de Imágenes Dinámica';
  public description: string = 'Esta imagen se carga desde el directorio de assets mediante Propery Binding';
  public rutaImagenLocal: string = 'assets/foto1.jpg';

  users: Usuario[] = [];

  constructor(private usersService: Servicio) { }

  async ngOnInit() {
    this.users = await this.usersService.getUsuarios();
    console.log(this.users);
    console.log("prueba");
  }

}
