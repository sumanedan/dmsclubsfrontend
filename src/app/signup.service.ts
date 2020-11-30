import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  getData(){
    //return this.http.post("http://192.168.1.13:80/prediction/Predict/signup")
  }
}
