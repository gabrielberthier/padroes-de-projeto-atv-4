import { Stock } from "../../domain/broker-shares/stock";

export interface StockObserver {
  notifyAction(stock: Stock): void;
}
