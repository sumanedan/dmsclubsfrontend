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
    //console.log(this._http.get("http://localhost/phpmyadmin/sql.php?db=game_predict&table=wallet")) 
  }
  Payment(){
    this.returnURL="/razorpay"
    this.router.navigate([this.returnURL])
    const data={
      "user_id":this.ser.id,
      "amount":this.amount,
      
    }
    this._http.post<any>('http://localhost/prediction/Predict/addwallet',JSON.stringify(data)).subscribe(s => {

    console.log(s)
    })
    console.log("Deposit:"+ this.amount);
    
   
  }
}
