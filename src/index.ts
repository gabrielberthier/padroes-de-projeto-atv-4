"use strict";

import { BasicEmitter } from "./services/emitters/basic-emitter";
import { CompressEmitter } from "./services/emitters/compress-emitter";
import { CryptoEmitter } from "./services/emitters/crypto-emitter";
import { BaseOne } from "./services/number-one-decorators/base-one-decoractor";
import { BracesDecorator } from "./services/number-one-decorators/braces-decorator";
import { BracketsDecorator } from "./services/number-one-decorators/brackets-decorator";
import { NumberOne } from "./services/number-one-decorators/number-one";
import { ParenthesesDecorator } from "./services/number-one-decorators/parentheses-decorator";
import { Broker } from "./services/observer-package/broker";
import { Stock } from "./services/observer-package/Stock";
import { PizzaPeppe } from "./services/pizza/pizzaiolo-peppe";

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

  // Questão 3
  new PizzaPeppe().main();

  // Questão 4
  const broker = new Broker("Nu Invest");
  const broker2 = new Broker("Easynvestments");
  const broker3 = new Broker("Serase");

  const stock = new Stock("VALE3", 15);
  stock.addSubscriber(broker);
  stock.addSubscriber(broker2);
  stock.addSubscriber(broker3);

  stock.value = 16;
})();
