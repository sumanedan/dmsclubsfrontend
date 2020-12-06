import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WithdrawService } from '../withdraw.service'
import { ValiduserService } from '../validuser.service';

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
  constructor(public navCtrl: NavController, private withd: WithdrawService, private _http: HttpClient,private ser:ValiduserService) { }

  ngOnInit() {
    // this.withd.getData().subscribe(list => {
    //   this.withdrawlist = list
    //   console.log(this.withdrawlist)
    //   console.log(typeof (this.withdrawlist))
    // })
  }
  withdraw() {
  this.ser.upi=this.upi
const data={
  "user_id":this.ser.id,
  "amount": this.amount,
  "upi_id": this.upi
}
const withdata={
  "user_id":this.ser.id,
  "amount": this.amount
  
}
    if (this.amount <= this.balance) {
      
      this._http.post<any>('http://gfortuneinternational.com/prediction/Predict/withdrawreq', JSON.stringify(data)).subscribe(data => {
      console.log(data); 
    })
    this._http.post<any>('http://gfortuneinternational.com/prediction/Predict/withdrawal', JSON.stringify(withdata)).subscribe(data => {
      console.log(data);
      alert("Amount Withdrawn Successfully..")
    },(error:HttpErrorResponse) => {
      // console.log(error)
      // console.log(error.status)
      if(error.status==400){
        alert("Withdrawal is not possible....")
      }
    })
    } 
    // else {
    //   alert("Withdrawal is not possible..")
    // }
    
    
    
  }
}


