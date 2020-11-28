import { Component, OnInit } from '@angular/core';
import {TimerService} from 'src/app/timer.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  timer:{min:number,sec:number}
  constructor(private ser:TimerService) { }

  ngOnInit() {
this.timer=this.ser.timer
console.log(JSON.stringify(this.timer.min))
console.log(JSON.stringify(this.timer.sec))

  }
  
 
}
