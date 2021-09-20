import { TextEncoder } from "util";
import { AbstractEmitterDecorator } from "./abstract-emitter-decorator";
import { Emitter } from "./message-emitters";

export class CompressEmitter extends AbstractEmitterDecorator {
  constructor(emitter: Emitter) {
    super(emitter);
  }
  send(subject: string): void {
    console.log("Compressing message");
    this.getEmissor().send(this.compress(subject));
  }
  compress(subject: string): string {
    const encoder = new TextEncoder();
    return encoder.encode(subject).join("");
  }
}
