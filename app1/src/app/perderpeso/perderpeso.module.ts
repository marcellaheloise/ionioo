import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerderpesoPageRoutingModule } from './perderpeso-routing.module';

import { PerderpesoPage } from './perderpeso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerderpesoPageRoutingModule
  ],
  declarations: [PerderpesoPage]
})
export class PerderpesoPageModule {}
