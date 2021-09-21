import { Stock } from "./stock";

export interface StockObserver {
  notifyAction(stock: Stock): void;
}
