import { Pizza } from "../../../domain/pizza-party/pizza";
import { CondimentoDecorator } from "./condimento-decorator";

export class BaconDecorator extends CondimentoDecorator {
  constructor(pizza: Pizza) {
    super(pizza, "Bacon", 0.8);
  }
}
