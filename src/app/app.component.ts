import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Welcome to Angular 4 project';
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];


  state=false;
  result=2;

  myClickFunction(event) {
    this.state=!this.state;
    //just added console.log which will display the event details in browser on click of the button.
   // alert("Button is clicked");
    console.log(this.state);
  }

  changemonths(event) {
    //console.log("Changed month from the Dropdown");
    alert("Changed month from the Dropdown");
    console.log(event);
 }

 showmyvalue(event){
   console.log(event.target.value);
 }


 
}
