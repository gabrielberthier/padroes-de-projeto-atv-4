"use strict";

import { BasicEmitter } from "./services/emitters/basic-emitter";
import { CompressEmitter } from "./services/emitters/compress-emitter";
import { CryptoEmitter } from "./services/emitters/crypto-emitter";

(() => {
  const message = "Some weird nonsense text";
  const cryptoEmitter = new CryptoEmitter(new BasicEmitter());
  cryptoEmitter.send(message);

  const compressEmitter = new CompressEmitter(new BasicEmitter());
  compressEmitter.send(message);

  const mixedEmitter = new CryptoEmitter(
    new CompressEmitter(new BasicEmitter())
  );

  mixedEmitter.send(message);
})();
