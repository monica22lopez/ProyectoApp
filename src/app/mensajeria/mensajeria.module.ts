import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeriaPageRoutingModule } from './mensajeria-routing.module';

import { MensajeriaPage } from './mensajeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeriaPageRoutingModule
  ],
  declarations: [MensajeriaPage]
})
export class MensajeriaPageModule {}
