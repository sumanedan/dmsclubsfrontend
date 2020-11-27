import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  counter: { min: number, sec: number }
  timerPaused: boolean = false;
disabled=false
  constructor() { }

  ngOnInit() {
  this.starttimer()  
  }
  starttimer(){
  this.timerPaused=true
    this.counter = { min: 3, sec: 0 }
    let intervalId = setInterval(() => {
      if(this.timerPaused){
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      } 
      else this.counter.sec -= 1
    }
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)
    }, 1000)
  }

  clickEvent(){
    this.timerPaused=false
    console.log(this.counter)
    
  }
 
}
