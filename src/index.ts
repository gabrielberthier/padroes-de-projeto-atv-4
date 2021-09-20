"use strict";

import { Emitters } from "./services/message-emitters";

(() => {
  const message = "Some weird nonsense text";
  const cryptoEmitter = new Emitters.CryptoEmitter(new Emitters.BasicEmitter());
  cryptoEmitter.send(message);

  const compressEmitter = new Emitters.CompressEmitter(
    new Emitters.BasicEmitter()
  );
  compressEmitter.send(message);

  const mixedEmitter = new Emitters.CryptoEmitter(
    new Emitters.CompressEmitter(new Emitters.BasicEmitter())
  );
  mixedEmitter.send(message);
})();
