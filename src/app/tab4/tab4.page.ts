import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  [x: string]: any;
  // alertController: any;
  // [x: string]: any;
 
  animales: any[] = [
    {
      img: 'f1.jpg'
    },
    {
      img: 'f2.jpg'
    },
    {
      img: 'f3.jpg'
    },
    {
      img: 'f4.jpg'
    },
    {
      img: 'f5.jpg'
    },
    {
      img: 'f6.jpg'
    },
    {
      img: 'f7.jpg'
    },
    {
      img: 'f8.jpg'
    },
    {
      img: 'f9.jpg'
    },
    {
      img: 'f10.jpg'
    },
    {
      img: 'f11.jpg'
    },
    {
      img: 'f12.jpg'
    },
     {
      img: 'f13.jpg'
    },
   
  ];
  
  
  // alertController: any;
  
  constructor(private  alertController: AlertController) { }


  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATENCION',
      
      subHeader: 'Perfil: ',
      message: 'Datos del perfil no disponible.',
      buttons: ['OK']
    });
  
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

}
