import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserService } from "../services";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"]
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
  onSetToInactive(id: number) {
    this.userService.userSetToInactive(id);
    this.userService.accountStatusChangedEvent.emit("active");
  }
}
