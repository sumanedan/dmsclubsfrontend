import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-popupblue',
  templateUrl: './popupblue.page.html',
  styleUrls: ['./popupblue.page.scss'],
})
export class PopupbluePage implements OnInit {
  s:any
  i:any
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    
    this.modalController.dismiss();
 }
 
 amount(s){
   document.getElementById("pid").innerHTML="Total contract money is "+s
 }
 inc(){
  this.s=document.getElementById("incdec").innerText

this.i=parseInt(this.s)
this.i=this.i+1
document.getElementById("incdec").innerHTML=""+this.i
  }
  dec(){
    this.s=document.getElementById("incdec").innerText

    this.i=parseInt(this.s)
    if(this.i>=1){
    this.i-=1
    document.getElementById("incdec").innerHTML=""+this.i 
    }
}
}
