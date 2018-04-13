import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];
}
