import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isTrueF = false;
  isTrueS = false;

  onPress1(){
    this.isTrueF = true;
    this.isTrueS = false;
  }
  onPress2(){
    this.isTrueS = true;
    this.isTrueF = false;
  }

}
