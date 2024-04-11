import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanharpesoPageRoutingModule } from './ganharpeso-routing.module';

import { GanharpesoPage } from './ganharpeso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanharpesoPageRoutingModule
  ],
  declarations: [GanharpesoPage]
})
export class GanharpesoPageModule {}
