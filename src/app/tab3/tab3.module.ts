import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PopupPageModule } from '../popup/popup.module'
import { Tab3PageRoutingModule } from './tab3-routing.module';
import {PopupbluePageModule} from '../popupblue/popupblue.module'
import {PopupredPageModule} from '../popupred/popupred.module'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    PopupPageModule,
    PopupbluePageModule,
    PopupredPageModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
