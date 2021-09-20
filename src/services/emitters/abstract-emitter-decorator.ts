import { Emitter } from "./message-emitters";

export abstract class AbstractEmitterDecorator implements Emitter {
  constructor(private emitter: Emitter) {}

  abstract send(subject: string): void;

  public getEmissor(): Emitter {
    return this.emitter;
  }
}
