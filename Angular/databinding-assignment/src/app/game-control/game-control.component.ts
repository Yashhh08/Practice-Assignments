import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  count = 0;

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }

}
