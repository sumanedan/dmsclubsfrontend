import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { WithdrawService } from '../withdraw.service'

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  amount: number
  balance: number = 10000
  withdrawlist: any
  upi: number
  constructor(public navCtrl: NavController, private withd: WithdrawService, private _http: HttpClient) { }

  ngOnInit() {
    // this.withd.getData().subscribe(list => {
    //   this.withdrawlist = list
    //   console.log(this.withdrawlist)
    //   console.log(typeof (this.withdrawlist))
    // })
  }
  withdraw() {

    if (this.amount <= this.balance) {
      alert("Amount Withdrawn Successfully..")
    } else {
      alert("Withdrawal is not possible..")
    }
    console.log(this.upi)
    this._http.post('http://localhost/prediction/Predict/withdrawal', {
      "user_id": "user",
      "amount": this.amount,
      "upi_id": this.upi
    }).subscribe(data => {
      console.log(data);
      if (data == 200) {

      }
    })
  }
}


