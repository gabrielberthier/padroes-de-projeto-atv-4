import { AbstractEmitterDecorator } from "./abstract-emitter-decorator";
import { Emitter } from "./message-emitters";

export class CryptoEmitter extends AbstractEmitterDecorator {
  constructor(emitter: Emitter) {
    super(emitter);
  }
  send(subject: string): void {
    console.log("Cryptographying message");
    console.log(this.getEmissor().send(this.encrypt(subject)));
  }
  encrypt(subject: string): string {
    return subject.split("").reverse().join("");
  }
}
