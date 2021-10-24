import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
messages = [
  {
    user: 'Monica',
    createdAt: 1554090856000,
    msg: 'Hola sis, ya viste los increibles fondos que tiene Pinterest'
  },
  {
    user: 'Michelle',
    createdAt: 1554090856000,
    msg: 'Si estan increibles'
  },
   {
    user: 'Monica',
    createdAt: 1554090856000,
    msg: 'Descarga tu favorito'
  },
  {
    user: 'Michelle',
    createdAt: 1554090856000,
    msg: 'PERFECTO!!'
  }
];

currentUser= 'Monica';
newMsg= ''; 

@ViewChild(IonContent) content: IonContent


  constructor() {}
  
sendMessage(){
  this.messages.push({
    user: 'Monica',
    createdAt: new Date().getTime(),
    msg: this.newMsg
  });
  this.newMsg = '';
  setTimeout(() => {
    this.content.scrollToBottom(200);
  

  });
  
}
}