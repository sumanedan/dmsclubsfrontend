import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // timer:{min:number,sec:number}
  counter: { min: number, sec: number }
  timerPaused: boolean = false;
  select: string;
  constructor(private ser: TimerService, private router: Router) { }
  returnURL: string = ""


  ngOnInit() {
    // this.timer=this.ser.timer
    // console.log(JSON.stringify(this.timer.min))
    // console.log(JSON.stringify(this.timer.sec))
    this.starttimer()
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
      if (this.counter.min === 0 && this.counter.sec == 0)
        this.counter = { min: 3, sec: 0 }

    }, 1000)

  }
  recharge() {
    this.returnURL = "/deposit"
    this.router.navigate([this.returnURL])
  }
  nextpage() {
    this.returnURL = "/wallet"
    this.router.navigate([this.returnURL])
  }
  optionsFn() {
    console.log(this.select)
    if (this.select == "Recharge") {
      this.recharge()
    }
    else {
      this.nextpage()
    }
  }
}
