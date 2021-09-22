import { Pizza } from "./pizza";

export class Pepperoni extends Pizza {
  /**
   *
   */
  constructor() {
    super("Pepperoni", 14.9);
  }

  displayInfo() {
    return "Pepperoni Pizza";
  }

  cost() {
    return this.value;
  }
}
