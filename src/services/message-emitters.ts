import { TextEncoder } from "util";

export namespace Emitters {
  export interface Emitter {
    send(subject: string): void;
  }

  export class BasicEmitter implements Emitter {
    send(subject: string): void {
      console.log("Emitting ");
      console.log(subject);
    }
  }

  export abstract class AbstractEmitterDecorator implements Emitter {
    constructor(private emitter: Emitter) {}

    abstract send(subject: string): void;

    public getEmissor(): Emitter {
      return this.emitter;
    }
  }

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

  export class CompressEmitter extends AbstractEmitterDecorator {
    constructor(emitter: Emitter) {
      super(emitter);
    }
    send(subject: string): void {
      console.log("Compressing message");
      console.log(this.getEmissor().send(this.compress(subject)));
    }
    compress(subject: string): string {
      const encoder = new TextEncoder();
      return encoder.encode(subject).join("");
    }
  }
}
