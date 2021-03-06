import { Pizza } from "../../../domain/pizza-party/pizza";
import { CondimentoDecorator } from "./condimento-decorator";

export class OreganoDecorator extends CondimentoDecorator {
  constructor(pizza: Pizza) {
    super(pizza, "Oregano", 0.1);
  }
}
