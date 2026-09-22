import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [],
})
export class GaleriaComponent  implements OnInit {

  public tituloSeccion: string= 'Galeria de Imágenes Dinámica';
  public description: string = 'Esta imagen se carga desde el directorio de assets mediante Propery Binding';
  public rutaImagenLocal: string ='assets/foto1.jpg';

  constructor() { }

  ngOnInit() {}

}
