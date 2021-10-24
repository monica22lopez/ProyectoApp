import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeriaPage } from './mensajeria.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeriaPageRoutingModule {}
