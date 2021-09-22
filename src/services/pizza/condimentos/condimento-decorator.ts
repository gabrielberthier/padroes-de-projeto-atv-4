import { Pizza } from "../../../domain/pizza-party/pizza";

export abstract class CondimentoDecorator extends Pizza {
  constructor(private pizza: Pizza, description: string, cost: number) {
    super(description, cost);
  }

  displayInfo() {
    return `${this.pizza.displayInfo()}, ${this.description}`;
  }

  cost() {
    return this.value + this.pizza.cost();
  }
}
