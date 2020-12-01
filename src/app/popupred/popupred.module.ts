import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupredPageRoutingModule } from './popupred-routing.module';

import { PopupredPage } from './popupred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupredPageRoutingModule
  ],
  declarations: [PopupredPage]
})
export class PopupredPageModule {}
