import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'sample app';
  isUserNameEmpty = false;
  showText = false;
  clickEvents = [];

  getBackground(i){
    if(i >= 5){
      return "blue";
    }
  }

  toggleDisplay(){
    this.clickEvents.push(new Date().getTime());
    if(this.showText){
      this.showText = false;
    } else {
      this.showText = true
    }
  }
}
