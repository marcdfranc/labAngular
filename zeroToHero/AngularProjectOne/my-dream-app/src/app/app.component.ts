import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Now is serious my-dream-app';
  courseName = "This is my Angular course";

  firstName = "Marcelo";
  lastName = "Francisco";

  testInterpolation = `${this.firstName} ${this.lastName}`;

  flag = false;

  myColor = "#ff00CC";

  changeFlag = () => {
    this.flag = !this.flag;
  }
}
