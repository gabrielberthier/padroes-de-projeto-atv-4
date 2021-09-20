import { NumDecorator } from "./num-decorator";

export class BaseOne implements NumDecorator {
  wrap(subject: string): string {
    return `${subject}`;
  }
}
