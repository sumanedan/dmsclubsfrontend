import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {
returnURL
s:any
i:any
  constructor(private modalController:ModalController,private router: Router) { }

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

