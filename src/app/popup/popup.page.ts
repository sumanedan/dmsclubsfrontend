import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular';
import { ValiduserService } from '../validuser.service';
import { HttpClient } from '@angular/common/http';
import { AmountService } from '../amount.service';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {
returnURL
s:any
i:any
k:any
  constructor(private modalController:ModalController,private router: Router,private ser:ValiduserService,private _http: HttpClient,private amt:AmountService) { }

  ngOnInit() {
  }
 
  closeModal(){
    
    this.modalController.dismiss();
 }
 
 amount(s){
   document.getElementById("pid").innerHTML="Total contract money is "+s
   this.amt.contractmoney=s;
   console.log(this.amt.contractmoney)

   const amtdata={
    "user_id":this.ser.id,
    "amount":"0"
    }
  this._http.post<any>('http://gfortuneinternational.com/prediction/Predict/addwallet',JSON.stringify(amtdata)).subscribe(j => {

  console.log(j)
  if(j<this.amt.contractmoney){
    alert("Please Recharge your wallet!!!!")
  }
  else if(j>=this.amt.contractmoney){
    this.k=parseInt(j)-parseInt(this.amt.contractmoney)
    console.log(this.k)
    this.amt.balance=this.k
    this.returnURL = "/tab3"
    this.router.navigate([this.returnURL])
  }
  //  const data={
  //   "user_id":this.ser.id,
  //   "amount":this.amount
  //   }
  // this._http.post<any>('http://localhost/prediction/Predict/addwallet',JSON.stringify(data)).subscribe(amt => {

  // console.log(amt)
  // if(s>amt.amount){
    
  // }
  // })
 })
}
 inc(){
  this.s=document.getElementById("incdec").innerText

this.i=parseInt(this.s)
this.i=this.i+1
document.getElementById("incdec").innerHTML=""+this.i
  }
  dec(){
    this.s=document.getElementById("incdec").innerText

    this.i=parseInt(this.s)
    if(this.i>=1){
    this.i-=1
    document.getElementById("incdec").innerHTML=""+this.i 
    }
  }
}

