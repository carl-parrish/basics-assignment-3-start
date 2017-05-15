import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showDisplay: boolean = false;
  public buttonClicks = [];


  public toggleDisplay(event: Event): void{
    this.showDisplay = !this.showDisplay;
    this.buttonClicks.push(event.timeStamp);

  }

  public getBackgroundColor() {
    return this.buttonClicks.length >= 5? 'dodgerblue' : 'white';
  }

}
