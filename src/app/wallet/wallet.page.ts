import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  amount:number
  balance:number=10000
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  withdraw(){
    if(this.amount<=this.balance){
      alert("Amount Withdrawn Successfully..")
    }else{
      alert("Withdrawal is not possible..")
    }

  }
}
