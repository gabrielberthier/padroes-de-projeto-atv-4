import { BaconDecorator } from "../../services/pizza/condimentos/bacon";
import { CreamCheeseEdgeDecorator } from "../../services/pizza/condimentos/cream-cheese-edge";
import { OreganoDecorator } from "../../services/pizza/condimentos/oregano";
import { TomatoDecorator } from "../../services/pizza/condimentos/tomato";
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
