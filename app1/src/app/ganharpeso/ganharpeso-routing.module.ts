import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanharpesoPage } from './ganharpeso.page';

const routes: Routes = [
  {
    path: '',
    component: GanharpesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanharpesoPageRoutingModule {}
