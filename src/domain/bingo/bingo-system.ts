import { BingoObserver } from "../../services/bingo/oberver";
import { range } from "../../utils/range";
import { BingoCard } from "./bingo-card";

export class BingoSystem {
  private static instance: BingoSystem | null = null;
  private drawnNums: number[] = [];

  private constructor(
    private observers: Array<BingoObserver> = new Array<BingoObserver>()
  ) {}

  static getInstance(): BingoSystem {
    if (!BingoSystem.instance) {
      BingoSystem.instance = new BingoSystem();
    }

    return BingoSystem.instance;
  }

  public start(numberOfPlayers: number = 5): BingoSystem {
    range(1, numberOfPlayers + 1).map(async (el) => {
      const card = new BingoCard(el, this.createCardNumbers());
      this.observers.push(card);
      return card;
    });

    return this;
  }

  play() {
    const card = this.doGame();
    let messageFinish = `GAME FINISHED  \nYou've won!!! ${this.drawnNums.length} numbers were drawn, which are `;
    messageFinish += `\n${this.drawnNums}`;
    card.bingo(messageFinish);
  }

  doGame(): BingoObserver {
    while (true) {
      const num = this.generateNumber();
      this.drawnNums.push(num);
      for (const iterator of this.observers) {
        if (iterator.warn(num)) {
          return iterator;
        }
      }
    }
  }

  createCardNumbers() {
    const numbers: number[] = [];
    range(1, 7).forEach(async () => {
      let generated = this.generateNumber();
      while (numbers.includes(generated)) {
        generated = this.generateNumber();
      }
      numbers.push(generated);
    });

    return numbers;
  }

  generateNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }
}
