import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular';
import { AmountService } from '../amount.service';
import { ValiduserService } from '../validuser.service';
@Component({
  selector: 'app-popupblue',
  templateUrl: './popupblue.page.html',
  styleUrls: ['./popupblue.page.scss'],
})
export class PopupbluePage implements OnInit {
  s:any
  i:any
  returnURL
  k:any
  constructor(private modalController:ModalController,private _http: HttpClient,private router: Router,private amt:AmountService,private ser:ValiduserService) { }

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
