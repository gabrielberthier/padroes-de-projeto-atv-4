import { NumDecorator } from "./num-decorator";

export abstract class AbstractWrapperDecorator implements NumDecorator {
  constructor(protected numDecorator: NumDecorator) {}

  abstract wrap(subject: string): string;
}
