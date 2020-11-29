import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  amount:number
  returnURL:string=""
  constructor(public navCtrl:NavController,private router: Router) { }

  ngOnInit() {
  }
  Payment(){
    console.log("Deposit:"+ this.amount);
    this.returnURL="/payment"
    this.router.navigate([this.returnURL])
  }
}
