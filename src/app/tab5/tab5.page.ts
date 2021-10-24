

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
interface Listado{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  data = Array(10);

  constructor(private alertController: AlertController) { }
  listados: Listado[]=[
    {
      icon: 'id-card',
      name: 'Fondos de pantalla',
      redirectTo: '/1',
    },
    {
      icon: 'paw',
      name: 'Fondo de animales',
      redirectTo: '/images2',
    },
    {
      icon: 'pizza',
      name: 'Fondos de comida favorita',
      redirectTo: '/images3',
    },
    {
      icon: 'rose',
      name: 'Fondos de rosas',
      redirectTo: '/images4',
    },
    {
      icon: 'sad',
      name: 'Fondos de emoji',
      redirectTo: '#',
    },
    {
      icon: 'sparkles',
      name: 'Fondos de luces',
      redirectTo: '#',
    },
    {
      icon: 'rainy',
      name: 'Fondos de tormentas',
      redirectTo: '#',
    },
    {
      icon: 'podium',
      name: 'Fondos de estadisticas',
      redirectTo: '#',
    },
    {
      icon: 'nutrition',
      name: 'Fondo de frutas favoritas',
      redirectTo: '#',
    },
    {
      icon: 'people',
      name: 'Fondos de amigos',
      redirectTo: '#',
    },
  ];
  ngOnInit() {
  }
 
  async mostrar(){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ATENCION!!!',
        message: 'Contenido de imagenes no disponible',
        buttons: ['OK']
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }