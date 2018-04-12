import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameEvent(gameEvent) {
    // do stuff here
    console.log(gameEvent.id);
    if (gameEvent.id % 2 === 0) {
      this.evenNumbers.push(gameEvent.id);
    } else {
      this.oddNumbers.push(gameEvent.id);
    }
  }
}
