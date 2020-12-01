import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {ValiduserService} from 'src/app/validuser.service'
import {SignupService} from '../signup.service'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
  signlist:any
 
  constructor(public navCtrl:NavController,private service:ValiduserService,private router: Router,private sign:SignupService,private _http: HttpClient) {}
  ngOnInit(){
    // this.sign.getData().subscribe(list => {
    //   this.signlist = list
    //   console.log(this.signlist)
    //   console.log(typeof (this.signlist))
    // })
    // this._http.get('http://localhost/prediction/Predict/userlist').subscribe(data=>
    // console.log(data))
    
    
  
  }
  register(){
    console.log("Mobile Number : ",this.mobile);
    console.log("Password : ",this.password);
    console.log("Recommendation Code : ",this.code);
    console.log("Privacy Policy : ",this.accept);
   
    this.service.username=this.mobile
    this.service.password=this.password
    // console.log(this.service.username)
    // console.log(this.service.password)
    const data={"mobile":this.mobile,
    "password":this.password,
    "type":"user",
    "username":this.mobile
    }
   
    this.returnURL = "/tabs/tab2"
    this.router.navigate([this.returnURL])}
  // this._http.post<any>('http://localhost/prediction/Predict/signup',JSON.stringify(data)).subscribe(s => {
        
  //        console.log(s.username)
  // })
}
  
  

    
  


