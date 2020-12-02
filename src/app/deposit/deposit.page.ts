import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {RechargeService} from '../recharge.service'
import { ValiduserService } from '../validuser.service';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  amount:number
  returnURL:string=""
 
  constructor(public navCtrl:NavController,private router: Router,private recharge:RechargeService,private _http: HttpClient,private ser:ValiduserService) { }

  ngOnInit() {
    
  }
  Payment(){
    const data={
      "user_id":this.ser.username,
      "amount": this.amount,
      "upi_id": this.ser.upi
    }
    console.log("Deposit:"+ this.amount);
    this.returnURL="/payment"
    this.router.navigate([this.returnURL])
    this._http.post<any>('http://localhost/prediction/Predict/addwallet',JSON.stringify(data)).subscribe(s => {

      console.log(data)
    })
  }
}
