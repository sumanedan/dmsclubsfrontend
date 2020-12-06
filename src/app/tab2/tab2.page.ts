// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { NavController } from '@ionic/angular';
// import { ValiduserService } from 'src/app/validuser.service'
// import { LoginService } from '../login.service'
// import { HttpClient } from '@angular/common/http';
// import { AlertController } from '@ionic/angular';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page {
//   mobilenumber: number
//   password: string
//   returnURL: string = ""

//   constructor(public navCtrl: NavController, private router: Router, private ser: ValiduserService, private log: LoginService, private _http: HttpClient, private alertController: AlertController) { }
//   ngOnInit(): void {
//     // this.log.getData().subscribe(list => {
//     //   this.loginlist = list
//     //   console.log(this.loginlist)
//     //   console.log(typeof (this.loginlist))
//     // }) 

//   }
//   login() {
//     console.log("Username:" + this.mobilenumber);
//     console.log("Password:" + this.password)

//     this.validateuser();

//   }
//   forget() {
//     console.log("FORGET PASSWORD")
//   }
//   validateuser() {
//     if (this.mobilenumber != undefined && this.password != undefined) {
//       this.ser.username = this.mobilenumber
//       this.ser.password = this.password
//       const data = {
//         "password": this.password,
//         "username": this.mobilenumber
//       }
//       this._http.post<any>('http://localhost/prediction/Predict/log', JSON.stringify(data)
//       ).subscribe(s => {
//         //console.log(s.ok==false)
//         //console.log(s.id)
//         this.ser.id = s.id
//         console.log(this.ser.id)
//         console.log(typeof s)

//       },
//         error => {
//           this.alertController.create({
//             header: 'Unauthorized User',
//             message: 'Invalid Username or Password',
//             buttons: ['OK']
//           }).then(res => {

//             res.present();

//           });
//           this.returnURL = "/tabs/tab2"
//           this.router.navigate([this.returnURL])

//         });
//       this.returnURL = "/tab3"
//       this.router.navigate([this.returnURL])
//       // if (this.mobilenumber == this.ser.username && this.password == this.ser.password) 

//       // {
//       //   console.log(this.mobilenumber)
//       //   console.log(this.ser.username)


//       // setTimeout(function () {
//       //   document.getElementById("load").style.visibility = "visible";
//       // }, 1000);

//     }
//     // else {
//     //   this.alertController.create({
//     //     header: 'Unauthorized User',
//     //     message: 'Invalid Username or Password',
//     //     buttons: ['OK']
//     //   }).then(res => {

//     //     res.present();

//     //   });
//     //   this.returnURL = "/tabs/tab2"
//     //   this.router.navigate([this.returnURL])
//     // }

//   }


//   goRegister() {
//     this.returnURL = "/tabs/tab1"
//     this.router.navigate([this.returnURL])
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ValiduserService } from 'src/app/validuser.service'
import { LoginService } from '../login.service'
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mobilenumber: number
  password: string
  returnURL: string = ""
  loginlist: any
  constructor(public navCtrl: NavController, private router: Router, private ser: ValiduserService, private log: LoginService, private _http: HttpClient, private alertController: AlertController) { }
  ngOnInit(): void {
    // this.log.getData().subscribe(list => {
    //   this.loginlist = list
    //   console.log(this.loginlist)
    //   console.log(typeof (this.loginlist))
    // }) 

  }
  login() {
    console.log("Username:" + this.mobilenumber);
    console.log("Password:" + this.password)

    this.validateuser();

  }
  forget() {
    console.log("FORGET PASSWORD")
  }
  validateuser() {
    if (this.mobilenumber != undefined && this.password != undefined) {
    
      this.ser.password=this.password
        const data = {
          "password": this.password,
          "username": this.mobilenumber
        }
        this._http.post<any>('http://gfortuneinternational.com/prediction/Predict/log', JSON.stringify(data)
        ).subscribe(s => {
          console.log(s.ok==false)
          console.log(s.id)
          this.ser.id=s.id
          console.log(typeof s)
          
        },
        error=>{
          this.alertController.create({
            header: 'Unauthorized User',
            message: 'Invalid Username or Password',
            buttons: ['OK']
          }).then(res => {
  
            res.present();
  
          });
          this.returnURL = "/tabs/tab2"
          this.router.navigate([this.returnURL])
        
        })
        this.returnURL = "/tab3"
          this.router.navigate([this.returnURL])
        // if (this.mobilenumber == this.ser.username && this.password == this.ser.password) 

        // {
        //   console.log(this.mobilenumber)
        //   console.log(this.ser.username)


        // setTimeout(function () {
        //   document.getElementById("load").style.visibility = "visible";
        // }, 1000);

    }
      // else {
      //   this.alertController.create({
      //     header: 'Unauthorized User',
      //     message: 'Invalid Username or Password',
      //     buttons: ['OK']
      //   }).then(res => {

      //     res.present();

      //   });
      //   this.returnURL = "/tabs/tab2"
      //   this.router.navigate([this.returnURL])
      // }
    
  }


  goRegister() {
    this.returnURL = "/tabs/tab1"
    this.router.navigate([this.returnURL])
  }
}
