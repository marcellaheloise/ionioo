import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerderpesoPage } from './perderpeso.page';

const routes: Routes = [
  {
    path: '',
    component: PerderpesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerderpesoPageRoutingModule {}
