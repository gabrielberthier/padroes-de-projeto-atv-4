import { Pizza } from "./pizza";

export class Mozzarella extends Pizza {
  /**
   *
   */
  constructor() {
    super("Mozzarella", 11.9);
  }

  displayInfo() {
    return "Mozzarella Pizza";
  }

  cost() {
    return this.value;
  }
}
