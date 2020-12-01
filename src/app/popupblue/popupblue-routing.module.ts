import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupbluePage } from './popupblue.page';

const routes: Routes = [
  {
    path: '',
    component: PopupbluePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupbluePageRoutingModule {}
