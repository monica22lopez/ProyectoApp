import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.page.html',
  styleUrls: ['./actualizacion.page.scss'],
})
export class ActualizacionPage implements OnInit {

  constructor() { }
  imagenes = [
    'assets/img/act1.jpg',
    'assets/img/act2.jpg',
    'assets/img/act3.jpg',
    
  
  ];

  imagen = [
    'assets/img/act4.jpg',
    'assets/img/act5.jpg',
    'assets/img/act6.jpg',
    
   
  ];
  ngOnInit() {
  }

}
