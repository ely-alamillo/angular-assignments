import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  changes = {
    activeToInactive: 0,
    inactiveToActive: 0
  };

  addChange(s: string) {
    if (s === "active") {
      ++this.changes.activeToInactive;
    } else {
      ++this.changes.inactiveToActive;
    }
    return this.changes;
  }
}
