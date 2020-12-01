import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupredPage } from './popupred.page';

const routes: Routes = [
  {
    path: '',
    component: PopupredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupredPageRoutingModule {}
