import { StockObserver } from "./stock-observer";

export class Stock {
  constructor(
    private _code: string,
    private _value: number,
    private subscribers: Set<StockObserver> = new Set<StockObserver>()
  ) {}

  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
    this.subscribers.forEach((el) => el.notifyAction(this));
  }

  public get code(): string {
    return this._code;
  }
  public set code(value: string) {
    this._code = value;
  }

  public addSubscriber(observer: StockObserver) {
    this.subscribers.add(observer);
  }

  removeSubscriber(observer: StockObserver) {
    this.subscribers.delete(observer);
  }
}
