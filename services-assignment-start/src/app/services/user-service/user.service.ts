import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class UserService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  accountStatusChangedEvent = new EventEmitter<string>();

  userSetToInactive(id: number) {
    console.log("setting to inactive: ", id);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  userSetToActive(id: number) {
    console.log("setting to active: ", id);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
