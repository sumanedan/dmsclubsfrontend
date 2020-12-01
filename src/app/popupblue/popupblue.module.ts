import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupbluePageRoutingModule } from './popupblue-routing.module';

import { PopupbluePage } from './popupblue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupbluePageRoutingModule
  ],
  declarations: [PopupbluePage]
})
export class PopupbluePageModule {}
