import { Stock } from "./stock";
import { StockObserver } from "./stock-observer";

export class Broker implements StockObserver {
  constructor(private nome: string) {}

  notifyAction(stock: Stock) {
    console.log("Corretora ", this.nome, " sendo notificada: ");
    console.log(
      `A ação ${stock.code} teve seu valor alterado para ${stock.value}`
    );
  }
}
