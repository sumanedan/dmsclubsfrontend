import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {ValiduserService} from 'src/app/validuser.service'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  user:any[]=[]
  mobile:number
  password:string
  code:number
  accept:string
  returnURL: string = ""
  constructor(public navCtrl:NavController,private service:ValiduserService,private router: Router) {}
  register(){
    console.log("Mobile Number : ",this.mobile);
    console.log("Password : ",this.password);
    console.log("Recommendation Code : ",this.code);
    console.log("Privacy Policy : ",this.accept);
    this.service.username=this.mobile
    this.service.password=this.password
    console.log(this.service.username)
    console.log(this.service.password)
    
    this.returnURL = "/tabs/tab2"
    this.router.navigate([this.returnURL])

}
}
