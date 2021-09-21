import { Stock } from "./Stock";

export interface StockObserver {
  notifyAction(stock: Stock): void;
}
