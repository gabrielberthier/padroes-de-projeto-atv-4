import { Pizza } from "../../../domain/pizza-party/pizza";
import { CondimentoDecorator } from "./condimento-decorator";

export class CreamCheeseEdgeDecorator extends CondimentoDecorator {
  constructor(pizza: Pizza) {
    super(pizza, "Creem Cheese Edge", 1.2);
  }
}
