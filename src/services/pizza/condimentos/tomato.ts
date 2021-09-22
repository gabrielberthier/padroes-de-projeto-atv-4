import { Pizza } from "../../../domain/pizza-party/pizza";
import { CondimentoDecorator } from "./condimento-decorator";

export class TomatoDecorator extends CondimentoDecorator {
  constructor(pizza: Pizza) {
    super(pizza, "Tomato", 0.5);
  }
}
