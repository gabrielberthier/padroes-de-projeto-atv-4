import { BaconDecorator } from "./condimentos/bacon";
import { CreamCheeseEdgeDecorator } from "./condimentos/cream-cheese-edge";
import { OreganoDecorator } from "./condimentos/oregano";
import { TomatoDecorator } from "./condimentos/tomato";
import { Pepperoni } from "./pepperoni";
import { Pizza } from "./pizza";

export class PizzaPeppe {
  main(): void {
    const pizza: Pizza = new BaconDecorator(
      new TomatoDecorator(
        new CreamCheeseEdgeDecorator(new OreganoDecorator(new Pepperoni()))
      )
    );

    console.log("Pizza", " ---- ", "Valor");
    console.log(pizza.displayInfo(), " ---- ", pizza.cost());
  }
}
