import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizacionPage } from './actualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizacionPageRoutingModule {}
