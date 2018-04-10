import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-details-view",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  hidden = true;
  clickCounter = 0;
  logs = [];
  constructor() {}

  ngOnInit() {}

  onDisplayClick() {
    this.hidden = !this.hidden;
    // this.logs.push(this.clickCounter);
    this.logs.push(new Date());
    this.clickCounter++;
    console.log("clicked");
    console.log(this.logs);
  }
}
