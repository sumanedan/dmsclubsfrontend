import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  
 
  
  
  {
    path: "inside",
    loadChildren: () =>
      import("../tab3/tab3.module").then((m) => m.Tab3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
