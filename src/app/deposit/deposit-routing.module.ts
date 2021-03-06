import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentPage } from '../payment/payment.page';

import { DepositPage } from './deposit.page';

const routes: Routes = [
  {
    path: '',
    component: DepositPage
  },
  {
    path: '/payment',
    component: PaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositPageRoutingModule {}
