import { Component, OnInit } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  PaymentAmount:number=10;
  currency:string='USD';
  currencyIcon:string='$';
 razor_key='rzp_test_q6UVQ2l42ae85D';
  constructor(private WebIntent:WebIntent) { }

  ngOnInit() {
  }
  options = {
    action: this.WebIntent.ACTION_VIEW,
    url: 'path/to/file',
    type: 'application/vnd.android.package-archive'
  }
//   this.WebIntent.startActivity(Option).then(Success=>{
//     console.log("success");
//     if(Success.extras.status=='SUCCESS'){
//     }else if(Success.extra.status=='SUBMITTED'){

//     }else if(Success.extra.status=='FAILED'){
//     }else {

//       }
//       error=>{
//         console.log("error");
//       }
// })
}