import { Emitter } from "./message-emitters";

export class BasicEmitter implements Emitter {
  send(subject: string): void {
    console.log("Emitting ");
    console.log(subject);
  }
}
