import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ValiduserService } from 'src/app/validuser.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mobilenumber: number
  password: string
  returnURL: string = ""
  constructor(public navCtrl: NavController, private router: Router, private ser: ValiduserService) { }
  login(){
    console.log("Username:" + this.mobilenumber);
    console.log("Password:" + this.password)
    this.validateuser();
  }
  forget() {
    console.log("FORGET PASSWORD")
  }
  validateuser() {
    if(this.mobilenumber!=undefined && this.password!=undefined){
    if(this.mobilenumber==this.ser.username && this.password==this.ser.password) 
    {
      console.log(this.mobilenumber)
      console.log(this.ser.username)

      this.returnURL = "/tabs/tab3"
      this.router.navigate([this.returnURL])
    }
    else{
      alert("invalid login")
    }
  }
    
  }
}
