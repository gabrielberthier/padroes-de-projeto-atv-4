import { AbstractWrapperDecorator } from "./abstract-wrapper-decorator";
import { NumDecorator } from "./num-decorator";

export class ParenthesesDecorator extends AbstractWrapperDecorator {
  constructor(private decorator: NumDecorator) {
    super(decorator);
  }

  wrap(subject: string): string {
    return `(${this.decorator.wrap(subject)})`;
  }
}
