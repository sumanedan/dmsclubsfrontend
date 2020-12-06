import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { Options } from 'ng2-opd-popup/components/popup/options';
import { ValiduserService } from '../validuser.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
//   PaymentAmount:number=10;
//   currency:string='USD';
//   currencyIcon:string='$';
//  razor_key='rzp_test_q6UVQ2l42ae85D';

  constructor(public WebIntent:WebIntent,private _http: HttpClient,private ser:ValiduserService) { }

  ngOnInit() {
    this.indent()
  }
  
  options = {
    action: this.WebIntent.ACTION_VIEW,
    url: "upi://pay?pa=<VPA>&am=<AMOUNT>",
    type: 'application/vnd.android.package-archive'
  }
  indent(){ 
  this.WebIntent.startActivity(this.options)

 .then(Success=>{
    console.log("success");
    if(Success.extras.status=='SUCCESS'){
    }else if(Success.extra.status=='SUBMITTED'){

    }else if(Success.extra.status=='FAILED'){
     }else {

      }
      error=>{
         console.log("error");
       }
})
  }
}
