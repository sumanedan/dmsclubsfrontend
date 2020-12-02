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

  constructor(private s: TimerService, private modalController: ModalController, private _http: HttpClient, private ser: ValiduserService) { }
  ngOnInit() {
    this.disabled = false;
    this.starttimer()
  }

  OpenModelgreen() {
    this.modalController.create({ component: PopupPage }).then((modalElement) => {
      modalElement.present();
      this.disabled = true
      this.prediction = "Green"
    })
  }
  OpenModelblue() {
    this.modalController.create({ component: PopupbluePage }).then((modalElement) => {
      modalElement.present();
      this.disabled = true
      this.prediction = "Yellow"
    })
  }
  OpenModelred() {
    this.modalController.create({ component: PopupredPage }).then((modalElement) => {
      modalElement.present();
      this.disabled = true
      this.prediction = "Red"
    })
  }
  predict(s) {
    this.prediction = s
  }


  starttimer() {
    const data = {
      "user_id": this.ser.username,
      "prediction": this.prediction,
    }
    this._http.post<any>('http://localhost/prediction/Predict/userpredict', JSON.stringify(data)).subscribe(data => {
      console.log(data);

    })
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
      }

    }, 1000)
    this.s.timer = this.counter
    console.log(this.s.timer)

  }



}

