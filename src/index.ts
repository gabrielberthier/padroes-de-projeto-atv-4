"use strict";

import { BasicEmitter } from "./services/emitters/basic-emitter";
import { CompressEmitter } from "./services/emitters/compress-emitter";
import { CryptoEmitter } from "./services/emitters/crypto-emitter";
import { BaseOne } from "./services/number-one-decorators/base-one-decoractor";
import { BracesDecorator } from "./services/number-one-decorators/braces-decorator";
import { BracketsDecorator } from "./services/number-one-decorators/brackets-decorator";
import { NumberOne } from "./services/number-one-decorators/number-one";
import { ParenthesesDecorator } from "./services/number-one-decorators/parentheses-decorator";

(() => {
  // Questão 1
  const message = "Some weird nonsense text";
  const cryptoEmitter = new CryptoEmitter(new BasicEmitter());
  cryptoEmitter.send(message);

  const compressEmitter = new CompressEmitter(new BasicEmitter());
  compressEmitter.send(message);

  const mixedEmitter = new CryptoEmitter(
    new CompressEmitter(new BasicEmitter())
  );

  mixedEmitter.send(message);

  // Questão 2
  const showOne = new BracketsDecorator(
    new BracesDecorator(
      new ParenthesesDecorator(
        new BracesDecorator(new ParenthesesDecorator(new BaseOne()))
      )
    )
  );
  console.log("Imprimindo número um formatado");

  new NumberOne(showOne).imprimir();
})();
