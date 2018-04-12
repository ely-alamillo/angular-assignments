import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output()
  onGameAlert = new EventEmitter<{
    status: string;
    id: number;
  }>();

  intervalID;
  id;
  constructor() {
    this.id = 0;
  }

  ngOnInit() {}

  onStart(): void {
    console.log("starting game now");
    this.intervalID = setInterval(() => {
      this.onGameAlert.emit({ status: "online", id: this.id++ });
    }, 1000);
  }

  onStop(): void {
    console.log("stopping game now");
    clearInterval(this.intervalID);
    this.id = 0;
  }
}
