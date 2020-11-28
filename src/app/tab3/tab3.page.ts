import { Component } from '@angular/core';
import { TimerService } from 'src/app/timer.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  counter: { min: number, sec: number }
  timerPaused: boolean = false;

  constructor(private s:TimerService) {}
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
        if (this.counter.min === 0 && this.counter.sec == 0) 
        this.counter = { min: 3, sec: 0 }
      
      },1000)
      
    }
  
    clickEvent(){
      this.timerPaused=false
      console.log("Timer stopped at:",this.counter)
      this.s.timer=this.counter
      this.counter = { min: 3, sec: 0 }
      this.starttimer()
    }
    
   
  }

