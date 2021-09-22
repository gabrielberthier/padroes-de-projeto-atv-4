import { NumDecorator } from "../services/number-one-decorators/num-decorator";

export class NumberOne {
  private value = 1;

  constructor(private decorator: NumDecorator) {}

  public imprimir(): void {
    const one: string = this.value.toString();
    console.log(this.decorator.wrap(one));
  }
}
