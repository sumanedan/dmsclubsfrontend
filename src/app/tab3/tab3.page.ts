import { Component } from '@angular/core';
import { TimerService } from 'src/app/timer.service'
import { ModalController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';
import { PopupbluePage } from '../popupblue/popupblue.page'
import { PopupredPage } from '../popupred/popupred.page'
import { HttpClient } from '@angular/common/http';
import { ValiduserService } from '../validuser.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  counter: { min: number, sec: number }
  timerPaused: boolean = false;
  disabled: boolean
  prediction: any
  k:any
  resultlist:Array<{user_id:string,reward:string,number:string}>=[]
  colourlist:Array<{user_id:string,reward:string,colour:string}>=[]
  color: string;

  constructor(private s: TimerService, private modalController: ModalController, private _http: HttpClient, private ser: ValiduserService) { }
  ngOnInit() {
    this.disabled = false;
    
    this.starttimer()
    
  }

  OpenModelgreen() {
    this.modalController.create({ component: PopupPage }).then((modalElement) => {
      modalElement.present();
      this.disabled = true
      this.predict("Green")
    })
  }
  OpenModelblue() {
    this.modalController.create({ component: PopupbluePage }).then((modalElement) => {
      modalElement.present();
      this.disabled = true
      this.predict("Blue")
    })
  }
  OpenModelred() {
    this.modalController.create({ component: PopupredPage }).then((modalElement) => {
      modalElement.present();
      this.disabled = true
      this.predict("Red")
    })
  }
  predict(s) {
    this.prediction = s
    this.disabled=true
    const data = {
      "user_id": this.ser.id,
      "prediction": this.prediction,
    }
    this._http.post<any>('http://localhost/prediction/Predict/userpredict', JSON.stringify(data)).subscribe(data => {
      console.log(data);

    })
  }
  starttimer() {
    
    this.timerPaused = true
    this.counter = { min: 3, sec: 0 }
    let intervalId = setInterval(() => {
      if (this.timerPaused) {
        if (this.counter.sec - 1 == -1) {
          this.counter.min -= 1;
          this.counter.sec = 59
        }
        else this.counter.sec -= 1
      }
      if (this.counter.min === 0 && this.counter.sec == 0) {
        this.counter = { min: 3, sec: 0 };
        this.disabled = false
        const data = {
          "user_id": this.ser.id,
          "prediction": this.prediction,
        }
        this._http.post<any>('http://localhost/prediction/Predict/number_result', JSON.stringify(data)).subscribe(numberlist => {
          console.log(numberlist);
           console.log(numberlist.user_id)
           console.log(typeof numberlist.user_id)
          // console.log("number",number.number)
          // console.log("reward",number.reward)
          //this.resultlist=JSON.stringify(number)
          //this.resultlist=JSON.stringify(number)
          this.resultlist.push({user_id:numberlist.user_id,reward:numberlist.reward,number:numberlist.number})
          console.log(this.resultlist)
          console.log(typeof this.resultlist)
          //console.log(this.resultlist)
        })
        this._http.post<any>('http://localhost/prediction/Predict/colour_result', JSON.stringify(data)).subscribe(colour => {
          console.log(colour);
          console.log(colour.user_id)
          if(colour.colour=="Yellow"){
            colour.colour="primary"
          }
          if(colour.colour=="Red"){
            colour.colour="danger"
          }
          if(colour.colour=="Green"){
            colour.colour="success"
          }
          // console.log("color",colour.color)
          // console.log("rewardcolor",colour.reward)
          this.colourlist.push({user_id:colour.user_id,reward:colour.reward,colour:colour.colour})
          
        })
        document.getElementById("table").style.visibility="visible"
      
      }

    }, 1000)
    this.s.timer = this.counter
    console.log(this.s.timer)

  }



}

