import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.page.html',
  styleUrls: ['./mensajeria.page.scss'],
})
export class MensajeriaPage  {

 

  messages = [
    {
      user: 'simon',
      createdAt: 1554090856000,
      msg: 'hey whats up mate?'
    },
    {
      user: 'max',
      createdAt: 1554090856000,
      msg: 'working on the Ionic mission, yoi?'
    },
     {
      user: 'simon',
      createdAt: 1554090856000,
      msg: 'Doing some new tutorial stuff?'
    }
  ];
  
  currentUser= 'simon';
  newMsg= ''; 
  
  @ViewChild(IonContent) content: IonContent
  
  
    constructor() {}
    
  sendMessage(){
    this.messages.push({
      user: 'simon',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    
  
    });
    
  }
  }
