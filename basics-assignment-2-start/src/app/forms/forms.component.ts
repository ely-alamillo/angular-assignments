import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  username = "";
  username2 = "";
  resetDisabled = true;
  constructor() {}

  ngOnInit() {}

  onUsername(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.resetDisabled = value !== "" ? false : true;
  }

  resetUsername() {
    this.username = "";
    this.resetDisabled = true;
  }
}
