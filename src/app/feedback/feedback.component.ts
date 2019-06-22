import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';
import { error } from 'util';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model:userDTO={
  first_name:'',
  last_name:'',
  age:'',
  email:''
  };

  constructor(private http:HttpClient) { }//inject http dependancy

  ngOnInit() {
  }

  /*sendFeedBack():void{
    alert(this.model.first_name);
    let url="http://localhost:8081/user/add";
    this.http.post(url,this.model).subscribe(
    
    );
  }*/
  onClickSubmit(data) {
    //alert("Entered Email id : " + data.first_name);
    //alert(data.first_name);
    let url="../../springboot-demo/user/all";
    this.http.post(url,data).subscribe(
    
    );
 }

}

export interface userDTO{
  first_name:string,
  last_name:string,
  age:string,
  email:string
}