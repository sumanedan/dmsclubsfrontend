import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {RechargeService} from '../recharge.service'
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  amount:number
  returnURL:string=""
  rechargelist:any
  constructor(public navCtrl:NavController,private router: Router,private recharge:RechargeService,private _http: HttpClient) { }

  ngOnInit() {
    this.recharge.getData().subscribe(list => {
      this.rechargelist = list
      console.log(this.rechargelist)
      console.log(typeof (this.rechargelist))
    })
  }
  Payment(){
    console.log("Deposit:"+ this.amount);

  

    this.returnURL="/payment"
    this.router.navigate([this.returnURL])
  }
}
