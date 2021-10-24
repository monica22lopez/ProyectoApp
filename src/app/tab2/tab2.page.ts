import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  [x: string]: any;
 /*  animales: any[] = [
    {
      img: '1.jpg'
    },
    {
      img: '2.jpg'
    },
    {
      img: '3.jpg'
    },
    {
      img: '4.jpg'
    },
    {
      img: '5.jpg'
    },
    {
      img: '6.jpg'
    },
    {
      img: '7.jpg'
    },
    {
      img: '8.jpg'
    },
    {
      img: '9.jpg'
    },
    {
      img: '10.jpg'
    },
   
   
  ]; */
  constructor() {}

  
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    
  }
  
  imagenes = [
    'assets/img/tab1.jpg',
    'assets/img/tab2.jpg',
    'assets/img/tab3.jpg',
    'assets/img/tab4.jpg',
   /*  'assets/img/tab5.jpg',
    'assets/img/tab6.jpg',
    'assets/img/7.jpg',
    'assets/img/8.jpg', */
  ];

  imagen = [
    'assets/img/tab6.jpg',
    'assets/img/tab7.jpg',
    'assets/img/tab8.jpg',
    'assets/img/tab9.jpg',
   /*  'assets/img/tab5.jpg',
    'assets/img/tab6.jpg',
    'assets/img/7.jpg',
    'assets/img/8.jpg', */
  ];

}
