import { Component, OnInit } from "@angular/core";
import { UserService } from "./services";
import { CounterService } from "./services/counter-service/counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {
    this.userService.accountStatusChangedEvent.subscribe((s: string) => {
      console.log(this.counterService.addChange(s));
      // console.log("status: ", s);
    });
  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
