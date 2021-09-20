export abstract class Pizza {
  constructor(private _description: string, private _value: number) {}

  public get description(): string {
    return this._description;
  }

  public get value(): number {
    return this._value;
  }

  abstract displayInfo(): string;

  abstract cost(): number;
}
